import "../CartSummaryCheckout/CartSummaryCheckout.scss";
import dummy from "../../../assets/dummy.png";
import { CartItem } from "../../../models/Product";

const APP_BASE_PATH: string = "/product_images/";

interface CartProps {
  cart: CartItem[];
  totalCost: number | null;
}

const CartSummaryCheckout = ({ cart, totalCost }: CartProps): JSX.Element => {
  return (
    <div className="cart-summary">
      <div className="cart-summary__balcony">
        <h3 className="cart-summary__balcony-title">Tus productos</h3>
      </div>
      <div className="cart-summary__container">
        {cart.map((product, index) => (
          <div className="cart-summary__item" key={index}>
            <img className="cart-summary__item-img" src={product?.image ? `${APP_BASE_PATH}${product?.image}` : dummy} alt={product?.productName}></img>
            <div className="cart-summary__item-info-container">
              <p className="cart-summary__item-name">{product?.productName}</p>
              <p className="cart-summary__item-price">{product?.productPrice}€</p>
              <p>{product.quantity} unidades</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary__cost">
        <span className="cart-summary__cost-title">Valor del pedido</span>
        <span className="cart-summary__cost-price">{totalCost} €</span>
      </div>
      <div className="cart-summary__delivery">
        <span className="cart-summary__delivery-title">Coste de la entrega</span>
        <span className="cart-summary__delivery-price">Gratuito</span>
      </div>
      <div className="cart-summary__cost-total">
        <span className="cart-summary__cost-total-title">Total</span>
        <span className="cart-summary__cost-total-price">{totalCost}€</span>
      </div>
      <div className="cart-summary__delivery-alert">
        <p className="cart-summary__delivery-alert-text">Nuestras devoluciones son gratuitas y sencillas. Si algo no está del todo bien, tienes 28 días para devolverlo. Lee más en nuestra política de devolución y reembolso.</p>
        <p className="cart-summary__delivery-alert-text cart-summary__delivery-alert-text--Uppercase">Envíos y devoluciones gratuitas por tiempo limitado.</p>
        <p className="cart-summary__delivery-alert-text">Luna Lane procesará tus datos personales para gestionar tu pedido, de acuerdo con nuestro aviso de privacidad.</p>
      </div>
    </div>
  );
};

export default CartSummaryCheckout;
