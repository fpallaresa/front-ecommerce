import "../CategoryPage/CategoryPage.scss";
import Header from "../../components/Header/Header";
import CategoryPageGrid from "./CategoryPageGrid/CategoryPageGrid";
import BreadcrumbsCategory from "./BreadcrumbsCategory/BreadcrumbsCategory";
import CategoryPaginator from "./CategoryPaginator/CategoryPaginator";

const CategoryPage = (): JSX.Element => {
  return (
    <div className="category-page">
      <Header></Header>
      <BreadcrumbsCategory></BreadcrumbsCategory>
      <CategoryPageGrid></CategoryPageGrid>
      <CategoryPaginator></CategoryPaginator>
    </div>
  );
};

export default CategoryPage;
