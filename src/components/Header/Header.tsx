import { useEffect, useState } from "react";
import "../Header/Header.scss";
import MenuIcon from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import ShoppingIcon from "../../assets/bag.svg";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Category } from "../../models/Category";
import Cart from "../Cart/Cart";

const Header = (): JSX.Element => {
  const API_URL_CATEGORY = `${process.env.REACT_APP_API_URL as string}/categorie`;
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = (): void => {
    fetch(API_URL_CATEGORY, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
          return;
        }
        return await response.json();
      })
      .then((responseParsed: Category[]) => {
        const mainCategories = responseParsed.filter((category) => category.parentCategory === null);
        setCategories(mainCategories);
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  const toogleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toogleCart = (): void => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="header">
        <div className="header__menu-container" onClick={toogleMenu}>
          <img src={MenuIcon} className="header__icon-menu" />
        </div>
        <NavLink className="header__link" to="/" title="">
          <img src={logo} className="header__logo" />
        </NavLink>
        <div className="header__navigation">
          {categories.map((category) => (
            <NavLink key={category._id} className="header__link" to={category.name.es.toLowerCase()} title="">
              {category.name.es}
            </NavLink>
          ))}
        </div>
        <div className="header__icon-container">
          <img src={SearchIcon} className="header__icon" />
          <div className="header__shopping">
            <img src={ShoppingIcon} className="header__shopping-icon" onClick={toogleCart} />
            <span className="header__shopping-indicator">83</span>
          </div>
          {isCartOpen && <Cart onClose={toogleCart} />}
        </div>
      </div>
      {isMenuOpen && <Dropdown categories={categories} onClose={toogleMenu} />}
    </>
  );
};

export default Header;
