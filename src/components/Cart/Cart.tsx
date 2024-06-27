import React from "react";
import "../Cart/Cart.scss";
import closeBlack from "../../assets/close-black.svg";
import product from "../../assets/dummy.png";

interface cartProps {
  onClose: () => void;
}
const Cart: React.FC<cartProps> = ({ onClose }): JSX.Element => {
  return (
    <div className="cart">
      <div className="cart__header">
        <img src={closeBlack} className="cart__close-icon" alt="Close" onClick={onClose} />
      </div>
      <div className="cart__container">
        <div className="cart__item">
          <img className="cart__item-img" src={product}></img>
          <div className="cart__item-info-container">
            <p className="cart__item-name">Nike AirMax</p>
            <div className="cart__button-container">
              <button className="cart__button-item">-</button>
              <input type="Number" value="2" name="quantity" required className="cart__input" />
              <button className="cart__button-item">+</button>
            </div>
          </div>
        </div>
        <div className="cart__item">
          <img className="cart__item-img" src={product}></img>
          <div className="cart__item-name-container">
            <p className="cart__item-name">Adidas Ultraboost</p>
            <div className="cart__button-container">
              <button className="cart__button-item">-</button>
              <input type="Number" value="1" name="quantity" required className="cart__input" />
              <button className="cart__button-item">+</button>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="cart__button-total">PAGAR (300€)</button>
    </div>
  );
};

export default Cart;
