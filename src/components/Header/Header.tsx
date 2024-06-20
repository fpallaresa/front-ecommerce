import { useState } from "react";
import "../Header/Header.scss";
import MenuIcon from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import ShoppingIcon from "../../assets/bag.svg";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <NavLink className="header__link" to="#" title="">
            HOMBRE
          </NavLink>
          <NavLink className="header__link" to="#" title="">
            MUJER
          </NavLink>
          <NavLink className="header__link" to="#" title="">
            INFANTIL
          </NavLink>
        </div>
        <div className="header__icon-container">
          <img src={SearchIcon} className="header__icon"></img>
          <img src={ShoppingIcon} className="header__icon"></img>
        </div>
      </div>
      {isMenuOpen && <Dropdown onClose={toogleMenu} />}
    </>
  );
};

export default Header;
