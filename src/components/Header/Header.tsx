import "../Header/Header.scss";
import Menu from "../../assets/image.png";
import Loup from "../../assets/lupa.png";
import Bag from "../../assets/bolsa-de-la-compra.png";
import logo from "../../assets/logo.svg";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <img src={Menu} className="header__icon" />
      <img src={logo} className="header__logo" />
      <div className="header__icon-container">
        <img src={Loup} className="header__icon"></img>
        <img src={Bag} className="header__icon"></img>
      </div>
    </div>
  );
};

export default Header;
