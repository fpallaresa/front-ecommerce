import React from "react";
import "../Cart/Cart.scss";
import close from "../../assets/close.svg";
import product from "../../assets/dummy.png"
interface cartProps {
  onClose: () => void;
}
const Cart: React.FC<cartProps> = ({ onClose }): JSX.Element => {
  return (
    <div className="cart">
      <div className="cart__header">
        <img src={close} className="cart__close-icon" alt="Close" onClick={onClose} />
      </div>
      <div className="cart__container">
        <div className="cart__item">
          <img className="cart__item-img" src={product}></img>
          <p className="cart__item-name">Nike AirMax</p>
          <div className="cart__button-container">
            <button className="cart__button-item">-</button>
            <button className="cart__button-item">+</button>
          </div>
        </div>
        <div className="cart__item">
          <img className="cart__item-img" src={product}></img>
          <p className="cart__item-name">Adidas Ultraboost</p>
          <div className="cart__button-container">
            <button className="cart__button-item">-</button>
            <button className="cart__button-item">+</button>
          </div>
        </div>
      </div>
      <button className="cart__button-total">Total</button>
    </div>
  );
};

export default Cart;
