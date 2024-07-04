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
  const [error] = useState("");

  const processPayment = async (formData: FormData): Promise<PaymentResult> => {
    console.log("hola aquí introduciremos el pago de Stripe");
    // Aquí ira la lógica para Stripe
    return { success: true };
  };

  return { processPayment, error };
};

export default useStripePayment;
