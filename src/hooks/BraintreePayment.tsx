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

const translateError = (error: string): string => {
  if (error.includes("payment_method_nonce")) {
    return "El número de tarjeta de crédito no es válida. Revise la numeración o pruebe con otra tarjeta.";
  }

  switch (error) {
    case "Transaction failed":
      return "La transacción ha fallado.";
    default:
      return "Hubo un error en la transacción.";
  }
};

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
      countryName: formData.country,
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
        const translatedError = translateError(data.message);
        setError(translatedError);
        return { success: false, error: translatedError };
      }
    } catch (error) {
      const translatedError = translateError("Error en la transacción");
      setError(translatedError);
      return { success: false, error: translatedError };
    }
  };

  return { processPayment, error };
};

export default useBraintreePayment;
