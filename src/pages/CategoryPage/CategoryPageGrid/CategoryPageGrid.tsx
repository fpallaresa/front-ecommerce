import "./CategoryPageGrid.scss";
import { NavLink } from "react-router-dom";
import filter from "../../../assets/filter.svg";
import dummy from "../../../assets/dummy.png";
import { Product } from "../../../models/Product";

interface ProductCategoryProps {
  categoryProductData: Product[] | null;
}

const APP_BASE_PATH: string = "/product_images/";

const GridCategoryPage = ({ categoryProductData }: ProductCategoryProps): JSX.Element => {
  return (
    <div className="category-page-grid">
      <div className="category-page-grid__utils">
        <div className="category-page-grid__filters">
          <img className="category-page-grid__filters-image" src={filter} alt="" />
          <span className="category-page-grid__filters-title">Filtrar / Ordenar</span>
        </div>
        <span className="category-page__total-items">{categoryProductData ? `${categoryProductData.length} productos` : "Cargando..."}</span>
      </div>
      <div className="category-page-grid__container">
        {categoryProductData?.map((product, index) => (
          <div className="category-page-grid__info" key={index}>
            <NavLink className="category-page-grid__link" to="#" title="">
              <img className="category-page-grid__image" src={(product?.imageSquare) ? `${APP_BASE_PATH}${product?.imageSquare}` : dummy} alt="" />
            </NavLink>
            <NavLink className="category-page-grid__link" to="#" title={product?.title?.es}>
              <h4 className="category-page-grid__title">{product?.title?.es}</h4>
            </NavLink>
            <span className="category-page-grid__price">{product?.price?.EUR}€</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCategoryPage;
