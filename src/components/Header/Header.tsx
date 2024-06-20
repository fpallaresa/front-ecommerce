import "../Header/Header.scss";
import MenuIcon from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import ShoppingIcon from "../../assets/bag.svg";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header__menu-container">
        <img src={MenuIcon} className="header__icon-menu" />
      </div>
      <img src={logo} className="header__logo" />
      <div className="header__navigation">
        <a>HOMBRE</a>
        <a>MUJER</a>
        <a>INFANTIL</a>
      </div>
      <div className="header__icon-container">
        <img src={SearchIcon} className="header__icon"></img>
        <img src={ShoppingIcon} className="header__icon"></img>
      </div>
    </div>
  );
};

export default Header;
