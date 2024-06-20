import { NavLink } from "react-router-dom";
import "./BreadcrumbsCategory.scss";
import arrow from "../../../assets/arrow-breadcrumb.svg";

const BreadcrumbsCategory = (): JSX.Element => {
  return (
    <>
      <div className="category-page__breadcrumbs">
        <h1 className="category-page__breadcrumbs-title">Parent Category</h1>
      </div>

      <div className="category-page__breadcrumbs">
        <NavLink className="category-page__link" to="#" title="">
          <h2 className="category-page__breadcrumbs-title category-page__breadcrumbs-title--link">Parent Category</h2>
        </NavLink>
        <span>
          <img className="category-page__breadcrumbs-separator" src={arrow} alt="" />
        </span>
        <h1 className="category-page__breadcrumbs-title">Category</h1>
      </div>
    </>
  );
};

export default BreadcrumbsCategory;

/*

*/
