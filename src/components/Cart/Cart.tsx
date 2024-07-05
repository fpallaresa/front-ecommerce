import "../Cart/Cart.scss";
import closeBlack from "../../assets/close-black.svg";
import dummy from "../../assets/dummy.png";
import { CartItem } from "../../models/Product";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../CartContext";

interface cartProps {
  onClose: () => void;
}

const APP_BASE_PATH: string = "/product_images/";

const Cart: React.FC<cartProps> = ({ onClose }): JSX.Element => {
  const initialCart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [errorMessages, setErrorMessages] = useState<(string | null)[]>(initialCart.map(() => null));
  const { updateCart } = useCart();

  const handleQuantityChange = (index: number, newQuantity: number): void => {
    if (index >= 0 && index < cart.length) {
      const newCart = [...cart];
      const newErrorMessages = [...errorMessages];
      const product = newCart[index];

      if (newQuantity < 1) {
        newCart.splice(index, 1);
        newErrorMessages.splice(index, 1);
      } else if (newQuantity > product.stock) {
        newErrorMessages[index] = "No hay más stock disponible de este producto";
        setErrorMessages(newErrorMessages);

        setTimeout(() => {
          const updatedErrorMessages = [...newErrorMessages];
          updatedErrorMessages[index] = null;
          setErrorMessages(updatedErrorMessages);
        }, 3000);
        return;
      } else {
        product.quantity = newQuantity;
        newErrorMessages[index] = null;
      }

      setCart(newCart);
      setErrorMessages(newErrorMessages);
      localStorage.setItem("cart", JSON.stringify(newCart));
      updateCart();
    }
  };

  const calculateTotal = (): number => {
    return cart.reduce((total, product) => total + product.productPrice * product.quantity, 0);
  };

  const totalCost = calculateTotal();

  return (
    <div className="cart">
      <div className="cart__header">
        <img src={closeBlack} className="cart__close-icon" alt="Close" onClick={onClose} />
      </div>
      <div className="cart__container">
        {cart.length === 0 ? (
          <p className="cart__empty-message">No hay productos en el carrito.</p>
        ) : (
          cart.map((product, index) => (
            <div className="cart__item" key={index}>
              <img className="cart__item-img" src={product?.image ? `${APP_BASE_PATH}${product?.image}` : dummy} alt={product?.productName} />
              <div className="cart__item-info-container">
                <p className="cart__item-name">{product?.productName}</p>
                <p className="cart__item-price">{product?.productPrice}€</p>
                <div className="cart__button-container">
                  <button
                    className="cart__button-item"
                    onClick={() => {
                      handleQuantityChange(index, product.quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={product.quantity}
                    name="quantity"
                    required
                    className="cart__input"
                    onChange={(event) => {
                      handleQuantityChange(index, parseInt(event.target.value) || 1);
                    }}
                  />
                  <button
                    className="cart__button-item"
                    onClick={() => {
                      handleQuantityChange(index, product.quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                {errorMessages[index] && <p className="cart__error-message">{errorMessages[index]}</p>}
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length !== 0 ? (
        <Link to="/checkout" className="cart__button-total" onClick={onClose}>
          PAGAR {totalCost}€
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
