import { FormControl, FormLabel, Input, Select, Tooltip } from "@chakra-ui/react";
import { Province } from "./province.enum";
import { Country } from "./country.enum";

interface CheckoutDataFormProps {
  formData: any;
  onChange: (data: any) => void;
}

const CheckoutDataForm = ({ formData, onChange }: CheckoutDataFormProps): JSX.Element => {
  const { firstName, lastName, secondLastName, address, postalCode, country, locality, province, phone, email } = formData;

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange({ country: event.target.value });
  };
  //   const validatePhone = (phone: string): void => {
  //     const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10,15}$/;
  //   };
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
          <Select placeholder="Selecciona un país" value={country} onChange={handleCountryChange}>
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
    </>
  );
};
export default CheckoutDataForm;
