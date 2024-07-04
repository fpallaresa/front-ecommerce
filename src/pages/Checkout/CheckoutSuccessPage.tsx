import { useLocation } from "react-router-dom";
import "./CheckoutSuccessPage.scss";

const CheckoutSuccessPage = (): JSX.Element => {
  const location = useLocation();
  const {
    _id,
    firstName,
    lastName,
    address,
    postalCode,
    country,
    locality,
    province,
  } = location.state as {
    _id: string;
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    country: string;
    locality: string;
    province: string;
  };

  return (
    <div className="checkout-success-page">
      <h1>Página de confirmación</h1>
      <p>
        Muchas gracias por tu compra {firstName} {lastName}. Hemos recibido tu
        pedido y será enviado a la dirección proporcionada.
      </p>
      <p>
        A continuación te adjuntamos la información facilitada:
        <br />
        <br />
        Número de pedido: {_id}
        <br />
        Dirección de envío: {address}, {postalCode}, {locality}, {province}, {country}
      </p>
      {/* Aquí podrías añadir el listado de productos y otros detalles */}
    </div>
  );
};

export default CheckoutSuccessPage;
