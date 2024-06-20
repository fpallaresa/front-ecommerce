import "./CategoryPageGrid.scss";
import { NavLink } from "react-router-dom";
import dummy from "../../../assets/dummy.png";
import filter from "../../../assets/filter.svg";

const GridCategoryPage = (): JSX.Element => {
  return (
    <div className="category-page-grid">
      <div className="category-page-grid__utils">
        <div className="category-page-grid__filters">
          <img className="category-page-grid__filters-image" src={filter} alt="" />
          <span className="category-page-grid__filters-title">Filtrar / Ordenar</span>
        </div>
        <span className="category-page__total-items">150 productos</span>
      </div>
      <div className="category-page-grid__container">
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
        <div className="category-page-grid__info">
          <NavLink className="category-page-grid__link" to="#" title="">
            <img className="category-page-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-page-grid__link" to="#" title="">
            <h4 className="category-page-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-page-grid__price">15€</span>
        </div>
      </div>
    </div>
  );
};

export default GridCategoryPage;
