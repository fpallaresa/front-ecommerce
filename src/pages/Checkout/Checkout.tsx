import "./Checkout.scss";
import "./CheckoutData/CheckoutData.scss";
import React, { useRef, useState } from "react";
import CheckoutData from "./CheckoutData/CheckoutData";
import { Box } from "@chakra-ui/react";
import CartSummaryCheckout from "./CartSummaryCheckout/CartSummaryCheckout";
import { CartItem } from "../../models/Product";
import useBraintreePayment from "../../hooks/BraintreePayment";
import useStripePayment from "../../hooks/StripePayment";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  secondLastName: string;
  address: string;
  postalCode: string;
  country: string;
  locality: string;
  province: string;
  phone: string;
  email: string;
  paymentMethod: string;
  price: number;
  productList: {
    sku: string;
    price: number;
    quantity: number;
    title: string;
    totalPrice: number;
  }[];
  cardNumber: string;
  expireDate: string;
  cvv: string;
  cardName: string;
  externalTransactionId: string;
}

const Checkout = (): JSX.Element => {
  const URL_API_CHECKOUT = `${process.env.REACT_APP_API_URL as string}/checkout`;
  const initialCart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");

  const calculateTotal = (cart: CartItem[]): number => {
    return cart.reduce((total, product) => {
      const price = Number(product.productPrice);
      const qty = Number(product.quantity);
      return total + price * qty;
    }, 0);
  };
  const [cart] = useState<CartItem[]>(initialCart);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    secondLastName: "",
    address: "",
    postalCode: "",
    country: "",
    locality: "",
    province: "",
    phone: "",
    email: "",
    paymentMethod: "",
    price: calculateTotal(cart),
    productList: cart.map((item) => ({
      sku: item.sku,
      price: item.productPrice,
      quantity: item.quantity,
      title: item.productName,
      totalPrice: item.productPrice * item.quantity,
    })),
    cardNumber: "",
    expireDate: "",
    cvv: "",
    cardName: "",
    externalTransactionId: "",
  });

  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const { processPayment: processBraintreePayment } = useBraintreePayment();
  const { processPayment: processStripePayment } = useStripePayment();

  const navigate = useNavigate();

  const handleCheckoutDataChange = (data: Partial<FormData>): void => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      const response = await fetch(URL_API_CHECKOUT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al crear el checkout");
      }

      const data = await response.json();
      console.log("Checkout inicial creado con éxito:", data);

      const { _id } = data as { _id: string; };

      let paymentResult;
      if (formData.paymentMethod === "braintree") {
        paymentResult = await processBraintreePayment(formData);
      } else if (formData.paymentMethod === "stripe") {
        paymentResult = await processStripePayment(formData);
      } else {
        setError("Método de pago no soportado");
        return;
      }

      if (paymentResult.success) {
        const updatedFormData = {
          ...formData,
          externalTransactionId: paymentResult.data?.transaction?.id || paymentResult.data?.paymentIntent?.id || "",
        };

        const updateResponse = await fetch(`${URL_API_CHECKOUT}/${_id.toString()}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        });

        if (!updateResponse.ok) {
          throw new Error("Error al actualizar el checkout con información del pago");
        }

        const updateData = await updateResponse.json();
        console.log("Checkout actualizado con éxito:", updateData);

        navigate("/checkout/success", {
          state: {
            _id,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            postalCode: formData.postalCode,
            country: formData.country,
            locality: formData.locality,
            province: formData.province,
            productList: formData.productList,
            price: formData.price,
          },
        });
      } else {
        setError(paymentResult.error ?? "Error en el proceso de pago");
      }
    } catch (error) {
      setError("Error en el proceso de checkout");
      console.error("Error en el proceso de checkout:", error);
    }
  };

  const handleButtonClick = (): void => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__main-column">
        <div className="checkout-info">
          <Box maxWidth="650px" mx="auto" p={0} mb={10} w="100%">
            <form ref={formRef} onSubmit={handleSubmit} className="checkout-info__form">
              <CheckoutData formData={formData} onChange={handleCheckoutDataChange} />
            </form>
          </Box>
        </div>
      </div>
      <div className="checkout__side-column">
        <CartSummaryCheckout cart={cart} totalCost={formData.price} error={error} onClick={handleButtonClick}></CartSummaryCheckout>
      </div>
    </div>
  );
};

export default Checkout;
