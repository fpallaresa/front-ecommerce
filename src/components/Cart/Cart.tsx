import React from "react";
import "../Cart/Cart.scss";
import closeBlack from "../../assets/close-black.svg";
import dummy from "../../assets/dummy.png";
import { Product } from "../../models/Product";
interface cartProps {
  onClose: () => void;
}

const Cart: React.FC<cartProps> = ({ onClose }): JSX.Element => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  return (
    <div className="cart">
      <div className="cart__header">
        <img src={closeBlack} className="cart__close-icon" alt="Close" onClick={onClose} />
      </div>
      <div className="cart__container">
        {cart.map((product, index) => (
          <div className="cart__item" key={index}>
            <img className="cart__item-img" src={dummy}></img>
            <div className="cart__item-info-container">
              <p className="cart__item-name">{product?.title.es}</p>
              <p className="cart__item-price">15€</p>
              <div className="cart__button-container">
                <button className="cart__button-item">-</button>
                <input type="Number" value="2" name="quantity" required className="cart__input" />
                <button className="cart__button-item">+</button>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="cart__item">
          <img className="cart__item-img" src={dummy}></img>
          <div className="cart__item-name-container">
            <p className="cart__item-name">Adidas Ultraboost</p>
            <p className="cart__item-price">10€</p>
            <div className="cart__button-container">
              <button className="cart__button-item">-</button>
              <input type="Number" value="3" name="quantity" required className="cart__input" />
              <button className="cart__button-item">+</button>
            </div>
          </div>
        </div> */}
      </div>
      <button type="submit" className="cart__button-total">
        PAGAR (300€)
      </button>
    </div>
  );
};

export default Cart;
