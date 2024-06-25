import { useEffect, useState } from "react";
import "../Header/Header.scss";
import MenuIcon from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import ShoppingIcon from "../../assets/bag.svg";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

const Header = (): JSX.Element => {
  const API_URL_CATEGORY = `${process.env.REACT_APP_API_URL as string}/categorie`;
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    fetchCategories();
    updateCartCount(); // Actualiza el contador cuando el componente se monta

    const handleStorageChange = (): void => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
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

  const updateCartCount = (): void => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setCartCount(cart.length);
  };

  const toogleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
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
            <img src={ShoppingIcon} className="header__shopping-icon" />
            <span className="header__shopping-indicator" id="cart-indicator">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
      {isMenuOpen && <Dropdown categories={categories} onClose={toogleMenu} />}
    </>
  );
};

export default Header;
