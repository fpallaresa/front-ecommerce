import { Link, useLocation } from "react-router-dom";
import "./CheckoutSuccessPage.scss";
import { Icon } from "@chakra-ui/react";
import { CheckCircleIcon, ArrowBackIcon } from "@chakra-ui/icons";

interface Product {
  sku: string;
  price: number;
  quantity: number;
  title: string;
  totalPrice: number;
}

const CheckoutSuccessPage = (): JSX.Element => {
  const location = useLocation();
  const { checkoutId, firstName, lastName, address, postalCode, country, locality, province, productList, price } = location.state as {
    checkoutId: string;
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    country: string;
    locality: string;
    province: string;
    productList: Product[];
    price: number;
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
        <div className="checkout-success-page__info-delivery">
          <p className="checkout-success-page__text">Número de pedido:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{checkoutId}</span>
          <p className="checkout-success-page__text">Dirección de envío:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{address}</span>
          <p className="checkout-success-page__text">Localidad:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{locality}</span>
          <p className="checkout-success-page__text">Provincia:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{province}</span>
          <p className="checkout-success-page__text">Código postal:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{postalCode}</span>
          <p className="checkout-success-page__text">País:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{country}</span>
        </div>
        <div className="checkout-success-page__products">
          <p className="checkout-success-page__text">Listado de productos:</p>
          <ul>
            {productList.map((product, index) => (
              <li key={index} className="checkout-success-page__product-item">
                <span className="checkout-success-page__product-item-feature">{product.title}</span>
                <span className="checkout-success-page__product-item-quantity">Unidades: {product.quantity}</span>
                <span className="checkout-success-page__product-item-unity-price">Precio unitario: {product.price}</span>
              </li>
            ))}
          </ul>
          <p className="checkout-success-page__text">Valor del pedido:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{price}€</span>
          <p className="checkout-success-page__text">Coste de la entrega:</p> <span className="checkout-success-page__info checkout-success-page__info--bold">Gratis</span>
          <p className="checkout-success-page__text">Precio total:</p>
          <span className="checkout-success-page__info checkout-success-page__info--bold">{price}€</span>
        </div>
      </div>
      <Link className="checkout-success-page__back-button" to={"/"}>
        <Icon className="checkout-success-page__back-button-icon" as={ArrowBackIcon} color="#031732" w={4} h={4} />
        Volver a la tienda
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
