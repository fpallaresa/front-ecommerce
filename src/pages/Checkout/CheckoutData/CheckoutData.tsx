import "./CheckoutData.scss";
import React, { useState } from "react";
import { FormControl, FormLabel, Input, Select, RadioGroup, Radio, Stack, Tooltip, FormErrorMessage } from "@chakra-ui/react";
import { Province } from "./province.enum";
import { Country } from "./country.enum";

interface CheckoutDataProps {
  formData: any;
  onChange: (data: any) => void;
}

const CheckoutData = ({ formData, onChange }: CheckoutDataProps): JSX.Element => {
  const { firstName, lastName, secondLastName, address, postalCode, country, locality, province, phone, email, paymentMethod, cardNumber, expireDate, cvv, cardName } = formData;

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
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
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
          expireDate: validateExpireDate(expireDate) ? "" : "La fecha de caducidad debe tener el formato MM/AA.",
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

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange({ country: event.target.value });
  };

  return (
    <>
      <div className="checkout-info__balcony">
        <h3 className="checkout-info__balcony-title">Tu información</h3>
      </div>
      <FormControl id="firstName" isRequired mb={8}>
        <FormLabel>Nombre</FormLabel>
        <Tooltip label="Escribe tu nombre completo. Por ejemplo: Fernando" aria-label="Nombre Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            value={firstName}
            type="text"
            placeholder="Escribe el nombre"
            onChange={(e) => {
              onChange({ firstName: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
      <FormControl id="lastName" isRequired mb={8}>
        <FormLabel>Primer Apellido</FormLabel>
        <Tooltip label="Escribe tu primer apellido. Por ejemplo: García" aria-label="Primer Apellido Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            type="text"
            placeholder="Escribe el primer apellido"
            value={lastName}
            onChange={(e) => {
              onChange({ lastName: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
      <FormControl id="secondLastName" mb={8}>
        <FormLabel>Segundo Apellido</FormLabel>
        <Tooltip label="Escribe tu segundo apellido (opcional). Por ejemplo: Alonso" aria-label="Segundo Apellido Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            type="text"
            placeholder="Escribe el segundo apellido"
            value={secondLastName}
            onChange={(e) => {
              onChange({ secondLastName: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
      <FormControl id="address" isRequired mb={8}>
        <FormLabel>Dirección</FormLabel>
        <Tooltip label="Escribe tu dirección completa, incluyendo calle, número, puerta, escalera o piso si aplica. Por ejemplo: Avenida de los Rosales, 34, escalera A, piso 1o 2a " aria-label="Dirección Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            type="text"
            placeholder="Escribe la dirección completa"
            value={address}
            onChange={(e) => {
              onChange({ address: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
      <FormControl id="locality" isRequired mb={8}>
        <FormLabel>Localidad</FormLabel>
        <Tooltip label="Escribe el nombre de tu localidad o ciudad. Por ejemplo: Hospitalet del Llobregat" aria-label="Localidad Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            type="text"
            placeholder="Escribe el nombre de la localidad"
            value={locality}
            onChange={(e) => {
              onChange({ locality: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
      <FormControl id="province" isRequired mb={8}>
        <FormLabel>Provincia</FormLabel>
        <Tooltip label="Selecciona tu provincia de residencia. En el caso de ser un envío al extranjero, seleccionar ENVÍO INTERANCIONAL ubicado al final del listado" aria-label="Provincia Tooltip" placement="top" hasArrow arrowSize={15}>
          <Select
            placeholder="Selecciona una provincia"
            value={province}
            onChange={(e) => {
              onChange({ province: e.target.value });
            }}
          >
            {Object.values(Province).map((province) => (
              <option key={province}>{province}</option>
            ))}
          </Select>
        </Tooltip>
      </FormControl>
      <FormControl id="postalCode" isRequired mb={8}>
        <FormLabel>Código Postal</FormLabel>
        <Tooltip label="Escribe tu código postal para el envío. Por ejemplo, en Madrid sería: 28001 " aria-label="Código Postal Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            type="text"
            placeholder="Escribe el código postal"
            value={postalCode}
            onChange={(e) => {
              onChange({ postalCode: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
      <FormControl id="country" isRequired mb={8}>
        <FormLabel>País</FormLabel>
        <Tooltip label="Selecciona tu país para el envío" aria-label="País Tooltip" placement="top" hasArrow arrowSize={15}>
          <Select
            placeholder="Selecciona un país"
            value={country}
            onChange={handleCountryChange}
          >
            {Object.keys(Country).map((key) => (
              <option key={key} value={key}>
                {Country[key as keyof typeof Country]}
              </option>
            ))}
          </Select>
        </Tooltip>
      </FormControl>
      <FormControl id="phoneNumber" isRequired mb={8}>
        <FormLabel>Teléfono</FormLabel>
        <Tooltip label="Escribe tu número de teléfono. No olvides incluir el prefijo. Por ejemplo, en España sería +34 999 888 777" aria-label="Teléfono Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            type="tel"
            placeholder="Escribe tu número de teléfono"
            value={phone}
            onChange={(e) => {
              onChange({ phone: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
      <FormControl id="email" isRequired mb={8}>
        <FormLabel>Email</FormLabel>
        <Tooltip label="Escribe tu dirección de correo electrónico" aria-label="Email Tooltip" placement="top" hasArrow arrowSize={15}>
          <Input
            type="email"
            placeholder="Escribe tu dirección de correo electrónico"
            value={email}
            onChange={(e) => {
              onChange({ email: e.target.value });
            }}
          />
        </Tooltip>
      </FormControl>
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
