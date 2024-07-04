import { useLocation } from "react-router-dom";
import "./CheckoutSuccessPage.scss";
import { Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const CheckoutSuccessPage = (): JSX.Element => {
  const location = useLocation();
  const { _id, firstName, lastName, address, postalCode, country, locality, province } = location.state as {
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
      <span>
        <Icon as={CheckCircleIcon} color="green.500" w={16} h={16} />
      </span>
      <h1 className="checkout-success-page__title">
        Muchas gracias por tu compra{" "}
        <span className="checkout-success-page__title checkout-success-page__title--bold">
          {firstName} {lastName}
        </span>
      </h1>
      <h2 className="checkout-success-page__subtitle">Hemos recibido tu pedido y será enviado a la dirección proporcionada. A continuación te adjuntamos la información de tu pedido:</h2>
      <div className="checkout-success-page__info-container">
        <p className="checkout-success-page__text">
          Número de pedido:
          <span className="checkout-success-page__info checkout-success-page__info--bold">{_id}</span>
          Dirección de envío:
          <span className="checkout-success-page__info checkout-success-page__info--bold">{address}</span>
          Localidad:
          <span className="checkout-success-page__info checkout-success-page__info--bold">{locality}</span>
          Provincia:
          <span className="checkout-success-page__info checkout-success-page__info--bold">{province}</span>
          Código postal:
          <span className="checkout-success-page__info checkout-success-page__info--bold">{postalCode}</span>
          País:
          <span className="checkout-success-page__info checkout-success-page__info--bold">{country}</span>
        </p>
        <div className="checkout-success-page__products">
          <p className="checkout-success-page__text">Listado de productos:</p>
          <p className="checkout-success-page__text">Valor del pedido:</p>
          <p className="checkout-success-page__text">Coste de la entrega:</p>
          <p className="checkout-success-page__text">Precio total:</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
