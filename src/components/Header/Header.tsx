import { useEffect, useState } from "react";
import "../Header/Header.scss";
import MenuIcon from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import ShoppingIcon from "../../assets/bag.svg";
import closeBlack from "../../assets/close-black.svg";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";
import Cart from "../Cart/Cart";

const Header = (): JSX.Element => {
  const API_URL_CATEGORY = `${process.env.REACT_APP_API_URL as string}/categorie`;
  const [categories, setCategories] = useState<Category[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const mainCategories = categories.filter((category) => !category.parentCategory);

  useEffect(() => {
    fetchCategories();
    updateCartCount();

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
        setCategories(responseParsed);
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

  const toogleCart = (): void => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
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
          {mainCategories.map((category) => (
            <NavLink key={category._id} className="header__link" to={category.name.es.toLowerCase()} title="">
              {category.name.es}
            </NavLink>
          ))}
        </div>
        <div className="header__icon-container">
          <div className="header__search-container">
            <img src={SearchIcon} className="header__icon" onClick={toggleSearch} />
          </div>
          <div className="header__shopping" onClick={toogleCart}>
            <img src={ShoppingIcon} className="header__shopping-icon" />
            <span className="header__shopping-indicator" id="cart-indicator">
              {cartCount}
            </span>
          </div>
          {isCartOpen && <Cart onClose={toogleCart} />}
        </div>
      </div>
      {isMenuOpen && <Dropdown categories={categories} onClose={toogleMenu} />}
      {isSearchOpen && (
        <div className="header__search-modal">
          <div className="header__search-content">
            <img src={closeBlack} className="header__search-close-icon" onClick={toggleSearch} alt="Cerrar" />
            <span className="header__search-text">Buscar</span>
            <div className="header__search-info">
              <input type="text" placeholder="Introduzca una palabra" className="header__search-input" />
              <button className="header__search-button" type="submit">
                <img src={SearchIcon} alt="Buscar" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
