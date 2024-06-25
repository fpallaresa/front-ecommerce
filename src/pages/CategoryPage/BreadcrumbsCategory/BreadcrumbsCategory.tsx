import { NavLink } from "react-router-dom";
import "./BreadcrumbsCategory.scss";
import arrow from "../../../assets/arrow-breadcrumb.svg";
import { Category } from "../../../models/Category";
import { useEffect, useState } from "react";

interface BreadcrumbsCategoryProps {
  categoryData: Category | null;
}

const BreadcrumbsCategory = ({ categoryData }: BreadcrumbsCategoryProps): JSX.Element => {
  let API_URL_CATEGORY = "";
  if (categoryData) {
    API_URL_CATEGORY = `${process.env.REACT_APP_API_URL as string}/categorie/children/${categoryData?._id}`;
    console.log(API_URL_CATEGORY);
  }
  const [childrenCategories, setChildrenCategories] = useState<Category[]>([]);
  const category = categoryData;
  const parentCategory = category?.parentCategory;

  const parentCategoryName = parentCategory && typeof parentCategory === "object" && "name" in parentCategory ? parentCategory.name?.es : null;
  const parentCategoryUrl = parentCategoryName ? `/${parentCategoryName.toLowerCase()}` : "";

  useEffect(() => {
    console.log(parentCategoryName);
    if (!parentCategoryName) {
      fetchCategoryChildren();
    }
  }, [parentCategoryName]);

  const fetchCategoryChildren = (): void => {
    fetch(API_URL_CATEGORY, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición a la API");
          return;
        }
        return await response.json();
      })
      .then((data) => {
        setChildrenCategories(data);
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <>
      {!parentCategoryName ? (
        <>
          <div className="category-page__breadcrumbs">
            <h1 className="category-page__breadcrumbs-title">{category?.name?.es}</h1>
          </div>
          <div className="category-page__breadcrumbs">
            {childrenCategories?.map((category, index) => (
              <NavLink key={index} to={`/${category.name.es.toLowerCase()}`}>
                <h1 className="category-page__breadcrumbs-subtitle">{category?.name?.es}</h1>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <div className="category-page__breadcrumbs">
          <NavLink className="category-page__link" to={parentCategoryUrl} title={parentCategoryName}>
            <h2 className="category-page__breadcrumbs-title category-page__breadcrumbs-title--link">{parentCategoryName}</h2>
          </NavLink>
          <span>
            <img className="category-page__breadcrumbs-separator" src={arrow} alt="" />
          </span>
          <h1 className="category-page__breadcrumbs-title">{category?.name?.es}</h1>
        </div>
      )}
    </>
  );
};

export default BreadcrumbsCategory;
