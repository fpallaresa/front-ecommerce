import "../Checkout/Checkout.scss";
import YourInformationCheckout from "./YourInformationCheckout/YourInformationCheckout";

const Checkout = (): JSX.Element => {
  return (
    <div className="checkout">
      <YourInformationCheckout></YourInformationCheckout>
    </div>
  );
};

export default Checkout;
