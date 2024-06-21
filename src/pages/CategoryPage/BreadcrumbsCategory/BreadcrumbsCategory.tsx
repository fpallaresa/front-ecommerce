import { NavLink } from "react-router-dom";
import "./BreadcrumbsCategory.scss";
import arrow from "../../../assets/arrow-breadcrumb.svg";
import { Category } from "../../../models/Category";

interface BreadcrumbsCategoryProps {
  categoryData: Category | null;
}

const BreadcrumbsCategory = ({ categoryData }: BreadcrumbsCategoryProps): JSX.Element => {

  const category = categoryData;
  const parentCategory = category?.parentCategory;

  const parentCategoryName = parentCategory && typeof parentCategory === "object" && "name" in parentCategory ? parentCategory.name?.es : null;
  const parentCategoryUrl = parentCategoryName ? `/${parentCategoryName.toLowerCase() as string}` : "";

  return (
    <>
      {!parentCategoryName ? (
        <div className="category-page__breadcrumbs">
          <h1 className="category-page__breadcrumbs-title">{category?.name?.es}</h1>
        </div>
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
