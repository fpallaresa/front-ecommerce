import "./CategoryGridHome.scss";
import { NavLink } from "react-router-dom";
import dummy from "../../../assets/dummy.png";

const CategoryGridHome = (): JSX.Element => {
  return (
    <div className="category-grid">
      <div className="category-grid__balcony">
        <NavLink className="category-grid__link" to="#" title="">
          <h3 className="category-grid__balcony-title">Category</h3>
        </NavLink>
      </div>
      <div className="category-grid__container">
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
        <div className="category-grid__info">
          <NavLink className="category-grid__link" to="#" title="">
            <img className="category-grid__image" src={dummy} alt="" />
          </NavLink>
          <NavLink className="category-grid__link" to="#" title="">
            <h4 className="category-grid__title">Lorem ipsum dolor sit amet</h4>
          </NavLink>
          <span className="category-grid__price">15€</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryGridHome;
