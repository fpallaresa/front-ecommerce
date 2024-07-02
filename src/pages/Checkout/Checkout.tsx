import "../Checkout/Checkout.scss";
import CartSummaryCheckout from "./CartSummaryCheckout/CartSummaryCheckout";
import CheckoutData from "./CheckoutData/CheckoutData";
import { CartItem } from "../../models/Product";
import { useState } from "react";

const Checkout = (): JSX.Element => {
  const initialCart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const [cart] = useState<CartItem[]>(initialCart);

  const calculateTotal = (): number => {
    return cart.reduce((total, product) => total + product.productPrice * product.quantity, 0);
  };

  const totalCost = calculateTotal();

  return (
    <div className="checkout">
      <div className="checkout__main-column">
        <CheckoutData totalCost={totalCost}></CheckoutData>
      </div>
      <div className="checkout__side-column">
        <CartSummaryCheckout cart={cart} totalCost={totalCost}></CartSummaryCheckout>
      </div>
    </div>
  );
};

export default Checkout;
