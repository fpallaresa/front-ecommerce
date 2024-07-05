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

const useStripePayment = (): { processPayment: (formData: FormData) => Promise<PaymentResult>; error: string; } => {
  const [error, setError] = useState("");

  const processPayment = async (formData: FormData): Promise<PaymentResult> => {
    const URL_API_CHECKOUT_STRIPE = `${process.env.REACT_APP_API_URL as string}/stripe/checkout`;

    const payload = {
      paymentMethodId: "pm_card_visa",
      amount: formData.price.toFixed(2),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      address: {
        line1: formData.address,
        city: formData.locality,
        postal_code: formData.postalCode,
        country: formData.country,
      }
    };

    try {
      const response = await fetch(URL_API_CHECKOUT_STRIPE, {
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

export default useStripePayment;
