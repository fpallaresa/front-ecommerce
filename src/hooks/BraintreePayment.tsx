import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
  cardName: string;
  address: string;
  locality: string;
  province: string;
  postalCode: string;
  country: string;
  price: number;
}

interface PaymentResult {
  success: boolean;
  data?: any;
  error?: string;
}

const useBraintreePayment = (): { processPayment: (formData: FormData) => Promise<PaymentResult>; error: string; } => {
  const [error, setError] = useState("");

  const processPayment = async (formData: FormData): Promise<PaymentResult> => {
    const URL_API_CHECKOUT_BRAINTREE = `${process.env.REACT_APP_API_URL as string}/braintree/checkout`;

    const [month, year] = formData.expireDate.split("/");
    const payload = {
      paymentMethodNonce: "fake-valid-nonce",
      amount: formData.price.toFixed(2),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      creditCardNumber: formData.cardNumber,
      expirationMonth: month,
      expirationYear: `20${year}`,
      cvv: formData.cvv,
      cardholderName: formData.cardName,
      streetAddress: formData.address,
      locality: formData.locality,
      region: formData.province,
      postalCode: formData.postalCode,
      countryName: formData.country
    };

    try {
      const response = await fetch(URL_API_CHECKOUT_BRAINTREE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        return { success: true, data };
      } else {
        setError(data.message);
        return { success: false, error: data.message };
      }
    } catch (error) {
      setError("Error en la transacción");
      return { success: false, error: "Error en la transacción" };
    }
  };

  return { processPayment, error };
};

export default useBraintreePayment;
