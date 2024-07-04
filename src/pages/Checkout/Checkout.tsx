import "./Checkout.scss";
import "./CheckoutData/CheckoutData.scss";
import React, { useRef, useState } from "react";
import CheckoutData from "./CheckoutData/CheckoutData";
import { Box } from "@chakra-ui/react";
import CartSummaryCheckout from "./CartSummaryCheckout/CartSummaryCheckout";
import { CartItem } from "../../models/Product";

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
  const [formData, setFormData] = useState({
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
  });
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleCheckoutDataChange = (data: any): void => {
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
      console.log("Checkout creado con éxito:", data);
    } catch (error) {
      setError("Error al crear el checkout");
      console.error("Error al crear el checkout:", error);
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
