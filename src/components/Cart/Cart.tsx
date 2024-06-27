import "../Cart/Cart.scss";
import closeBlack from "../../assets/close-black.svg";
import dummy from "../../assets/dummy.png";
import { Product } from "../../models/Product";
interface cartProps {
  onClose: () => void;
}

const APP_BASE_PATH: string = "/product_images/";
const Cart: React.FC<cartProps> = ({ onClose }): JSX.Element => {
  const cartProducts: Product[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  //   const [cart, setCart] = useState<Product[]>(cartProducts);

  //   const handleQuantityChange = (index: number, amount: number) => {
  //     const newCart = [...cart];
  //     newCart[index].quantity = Math.max(1, newCart[index].quantity + amount);
  //     setCart(newCart);
  //     localStorage.setItem("cart", JSON.stringify(newCart));
  //   };

  //   const calculateTotal = () => {
  //     return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  //   };
  return (
    <div className="cart">
      <div className="cart__header">
        <img src={closeBlack} className="cart__close-icon" alt="Close" onClick={onClose} />
      </div>
      <div className="cart__container">
        {cartProducts.map((product, index) => (
          <div className="cart__item" key={index}>
            <img className="cart__item-img" src={product?.imageSquare ? `${APP_BASE_PATH}${product?.imageSquare}` : dummy} alt={product?.title?.es}></img>
            <div className="cart__item-info-container">
              <p className="cart__item-name">{product?.title.es}</p>
              <p className="cart__item-price">{product?.price?.EUR}€</p>
              <div className="cart__button-container">
                <button className="cart__button-item">-</button>
                <input type="Number" value="2" name="quantity" required className="cart__input" />
                <button className="cart__button-item">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="submit" className="cart__button-total">
        PAGAR €
      </button>
    </div>
  );
};

export default Cart;
