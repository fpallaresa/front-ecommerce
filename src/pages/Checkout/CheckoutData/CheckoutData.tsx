import "./CheckoutData.scss";
import { useState } from "react";
import { FormControl, FormLabel, Input, RadioGroup, Radio, Stack, Tooltip, FormErrorMessage } from "@chakra-ui/react";

interface CheckoutDataProps {
  formData: any;
  onChange: (data: any) => void;
}

const CheckoutData = ({ formData, onChange }: CheckoutDataProps): JSX.Element => {
  const { paymentMethod, cardNumber, expireDate, cvv, cardName } = formData;

  const [errors, setErrors] = useState({
    cardNumber: "",
    expireDate: "",
    cvv: "",
    cardName: "",
  });

  const validateCardNumber = (number: string): boolean => {
    return /^\d{13,18}$/.test(number);
  };

  const validateExpireDate = (date: string): boolean => {
    const [month, year] = date.split("/").map(Number);
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(date)) {
      return false;
    }

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }

    return true;
  };

  const validateCvv = (cvv: string): boolean => {
    return /^\d{3}$/.test(cvv);
  };

  const handleBlur = (field: string): void => {
    switch (field) {
      case "cardNumber":
        setErrors((prevErrors) => ({
          ...prevErrors,
          cardNumber: validateCardNumber(cardNumber) ? "" : "El número de tarjeta debe tener entre 13 y 18 dígitos.",
        }));
        break;
      case "expireDate":
        setErrors((prevErrors) => ({
          ...prevErrors,
          expireDate: validateExpireDate(expireDate) ? "" : "La fecha de caducidad debe tener el formato MM/AA. Y la fecha no puede ser anterior a la actual.",
        }));
        break;
      case "cvv":
        setErrors((prevErrors) => ({
          ...prevErrors,
          cvv: validateCvv(cvv) ? "" : "El CVV debe tener 3 dígitos.",
        }));
        break;
      case "cardName":
        setErrors((prevErrors) => ({
          ...prevErrors,
          cardName: cardName !== "" ? "" : "El nombre del titular es requerido.",
        }));
        break;
      default:
        break;
    }
  };

  const handlePaymentMethodChange = (value: string): void => {
    onChange({ paymentMethod: value });
  };

  return (
    <>
      <div className="checkout-info__balcony checkout-info__balcony--second">
        <h3 className="checkout-info__balcony-title">Pago</h3>
      </div>
      <FormControl id="paymentMethod" isRequired mb={8}>
        <FormLabel>Forma de Pago</FormLabel>
        <Tooltip label="Selecciona tu método de pago preferido" aria-label="Forma de Pago Tooltip" placement="top-start" hasArrow arrowSize={15}>
          <RadioGroup
            defaultValue={paymentMethod}
            onChange={(value) => {
              handlePaymentMethodChange(value);
            }}
          >
            <Stack flexDirection="column">
              <Radio value="braintree">Tarjeta de Crédito (Braintree)</Radio>
              <Radio value="stripe">Tarjeta de Crédito (Stripe)</Radio>
            </Stack>
          </RadioGroup>
        </Tooltip>
      </FormControl>
      <FormControl id="cardName" isRequired mb={8} isInvalid={!!errors.cardName}>
        <FormLabel>Nombre del Titular</FormLabel>
        <Input
          type="text"
          placeholder="Escribe nombre y apellido"
          value={cardName}
          onChange={(e) => {
            onChange({ cardName: e.target.value });
          }}
          onBlur={() => {
            handleBlur("cardName");
          }}
        />
        <FormErrorMessage>{errors.cardName}</FormErrorMessage>
      </FormControl>
      <FormControl id="cardNumber" isRequired mb={8} isInvalid={!!errors.cardNumber}>
        <FormLabel>Número de Tarjeta</FormLabel>
        <Input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => {
            onChange({ cardNumber: e.target.value });
          }}
          onBlur={() => {
            handleBlur("cardNumber");
          }}
        />
        <FormErrorMessage>{errors.cardNumber}</FormErrorMessage>
      </FormControl>
      <FormControl id="expireDate" isRequired mb={8} isInvalid={!!errors.expireDate}>
        <FormLabel>Fecha de Caducidad</FormLabel>
        <Input
          type="text"
          placeholder="MM/AA"
          value={expireDate}
          onChange={(e) => {
            onChange({ expireDate: e.target.value });
          }}
          onBlur={() => {
            handleBlur("expireDate");
          }}
        />
        <FormErrorMessage>{errors.expireDate}</FormErrorMessage>
      </FormControl>
      <FormControl id="cvv" isRequired mb={8} isInvalid={!!errors.cvv}>
        <FormLabel>CVV</FormLabel>
        <Input
          type="text"
          placeholder="123"
          value={cvv}
          onChange={(e) => {
            onChange({ cvv: e.target.value });
          }}
          onBlur={() => {
            handleBlur("cvv");
          }}
        />
        <FormErrorMessage>{errors.cvv}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default CheckoutData;
