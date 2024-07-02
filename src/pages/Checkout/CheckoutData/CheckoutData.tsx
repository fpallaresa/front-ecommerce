import "../CheckoutData/CheckoutData.scss";
import { Box, FormControl, FormLabel, Input, Select, RadioGroup, Radio, Stack, Button, useToast, Tooltip } from "@chakra-ui/react";

interface CheckoutDataProps {
  totalCost: number | null;
}

const CheckoutData = ({ totalCost }: CheckoutDataProps): JSX.Element => {
  const toast = useToast();

  const handleSubmit = (e: { preventDefault: () => void; }): void => {
    e.preventDefault();
    toast({
      title: "Compra realizada.",
      description: "Tu compra ha sido procesada correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <div className="checkout-info">
        <Box maxWidth="650px" mx="auto" p={0} mb={10} w="100%" >
          <form onSubmit={handleSubmit} className="checkout-info__form">
            <div className="checkout-info__balcony">
              <h3 className="checkout-info__balcony-title">Tu información</h3>
            </div>
            <FormControl id="name" isRequired mb={8}>
              <FormLabel>Nombre</FormLabel>
              <Tooltip label="Escribe tu nombre completo. Por ejemplo: Fernando" aria-label="Nombre Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="text" placeholder="Escribe el nombre" />
              </Tooltip>
            </FormControl>
            <FormControl id="firstLastName" isRequired mb={8}>
              <FormLabel>Primer Apellido</FormLabel>
              <Tooltip label="Escribe tu primer apellido. Por ejemplo: García" aria-label="Primer Apellido Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="text" placeholder="Escribe el primer apellido" />
              </Tooltip>
            </FormControl>
            <FormControl id="secondLastName" mb={8}>
              <FormLabel>Segundo Apellido</FormLabel>
              <Tooltip label="Escribe tu segundo apellido (opcional). Por ejemplo: Alonso" aria-label="Segundo Apellido Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="text" placeholder="Escribe el segundo apellido" />
              </Tooltip>
            </FormControl>
            <FormControl id="address" isRequired mb={8}>
              <FormLabel>Dirección</FormLabel>
              <Tooltip label="Escribe tu dirección completa, incluyendo calle, número, puerta, escalera o piso si aplica. Por ejemplo: Avenida de los Rosales, 34, escalera A, piso 1o 2a " aria-label="Dirección Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="text" placeholder="Escribe la dirección completa" />
              </Tooltip>
            </FormControl>
            <FormControl id="location" isRequired mb={8}>
              <FormLabel>Localidad</FormLabel>
              <Tooltip label="Escribe el nombre de tu localidad o ciudad. Por ejemplo: Hospitalet del Llobregat" aria-label="Localidad Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="text" placeholder="Escribe el nombre de la localidad" />
              </Tooltip>
            </FormControl>
            <FormControl id="province" isRequired mb={8}>
              <FormLabel>Provincia</FormLabel>
              <Tooltip label="Selecciona tu provincia de residencia. En el caso de ser un envío al extranjero, seleccionar ENVÍO INTERANCIONAL ubicado al final del listado" aria-label="Provincia Tooltip" placement="top" hasArrow arrowSize={15}>
                <Select placeholder="Selecciona una provincia">
                  <option>Álava</option>
                  <option>Albacete</option>
                  <option>Alicante</option>
                  <option>Almería</option>
                  <option>Asturias</option>
                  <option>Ávila</option>
                  <option>Badajoz</option>
                  <option>Baleares</option>
                  <option>Barcelona</option>
                  <option>Burgos</option>
                  <option>Cáceres</option>
                  <option>Cádiz</option>
                  <option>Cantabria</option>
                  <option>Castellón</option>
                  <option>Ceuta</option>
                  <option>Ciudad Real</option>
                  <option>Córdoba</option>
                  <option>Cuenca</option>
                  <option>Gerona</option>
                  <option>Granada</option>
                  <option>Guadalajara</option>
                  <option>Guipúzcoa</option>
                  <option>Huelva</option>
                  <option>Huesca</option>
                  <option>Jaén</option>
                  <option>La Coruña</option>
                  <option>La Rioja</option>
                  <option>Las Palmas</option>
                  <option>León</option>
                  <option>Lérida</option>
                  <option>Lugo</option>
                  <option>Madrid</option>
                  <option>Málaga</option>
                  <option>Melilla</option>
                  <option>Murcia</option>
                  <option>Navarra</option>
                  <option>Orense</option>
                  <option>Palencia</option>
                  <option>Pontevedra</option>
                  <option>Salamanca</option>
                  <option>Santa Cruz de Tenerife</option>
                  <option>Segovia</option>
                  <option>Sevilla</option>
                  <option>Soria</option>
                  <option>Tarragona</option>
                  <option>Teruel</option>
                  <option>Toledo</option>
                  <option>Valencia</option>
                  <option>Valladolid</option>
                  <option>Vizcaya</option>
                  <option>Zamora</option>
                  <option>Zaragoza</option>
                  <option>ENVÍO INTERNACIONAL</option>
                </Select>
              </Tooltip>
            </FormControl>
            <FormControl id="postalCode" isRequired mb={8}>
              <FormLabel>Código Postal</FormLabel>
              <Tooltip label="Escribe tu código postal para el envío. Por ejemplo, en Madrid sería: 28001 " aria-label="Código Postal Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="text" placeholder="Escribe el código postal" />
              </Tooltip>
            </FormControl>
            <FormControl id="country" isRequired mb={8}>
              <FormLabel>País</FormLabel>
              <Tooltip label="Selecciona tu país para el envío" aria-label="País Tooltip" placement="top" hasArrow arrowSize={15}>
                <Select placeholder="Selecciona un país">
                  <option>España</option>
                  <option>Afganistán</option>
                  <option>Albania</option>
                  <option>Alemania</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Antigua y Barbuda</option>
                  <option>Arabia Saudita</option>
                  <option>Argelia</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaiyán</option>
                  <option>Bahamas</option>
                  <option>Bangladés</option>
                  <option>Barbados</option>
                  <option>Baréin</option>
                  <option>Bélgica</option>
                  <option>Belice</option>
                  <option>Benín</option>
                  <option>Bielorrusia</option>
                  <option>Birmania</option>
                  <option>Bolivia</option>
                  <option>Bosnia y Herzegovina</option>
                  <option>Botsuana</option>
                  <option>Brasil</option>
                  <option>Brunéi</option>
                  <option>Bulgaria</option>
                  <option>Burkina Faso</option>
                  <option>Burundi</option>
                  <option>Bután</option>
                  <option>Cabo Verde</option>
                  <option>Camboya</option>
                  <option>Camerún</option>
                  <option>Canadá</option>
                  <option>Chad</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Chipre</option>
                  <option>Colombia</option>
                  <option>Comoras</option>
                  <option>Corea del Norte</option>
                  <option>Corea del Sur</option>
                  <option>Costa de Marfil</option>
                  <option>Costa Rica</option>
                  <option>Croacia</option>
                  <option>Cuba</option>
                  <option>Dinamarca</option>
                  <option>Dominica</option>
                  <option>Ecuador</option>
                  <option>Egipto</option>
                  <option>El Salvador</option>
                  <option>Emiratos Árabes Unidos</option>
                  <option>Eritrea</option>
                  <option>Eslovaquia</option>
                  <option>Eslovenia</option>
                  <option>Estados Unidos</option>
                  <option>Estonia</option>
                  <option>Esuatini</option>
                  <option>Etiopía</option>
                  <option>Filipinas</option>
                  <option>Finlandia</option>
                  <option>Fiyi</option>
                  <option>Francia</option>
                  <option>Gabón</option>
                  <option>Gambia</option>
                  <option>Georgia</option>
                  <option>Ghana</option>
                  <option>Granada</option>
                  <option>Grecia</option>
                  <option>Guatemala</option>
                  <option>Guinea</option>
                  <option>Guinea-Bisáu</option>
                  <option>Guinea Ecuatorial</option>
                  <option>Guyana</option>
                  <option>Haití</option>
                  <option>Honduras</option>
                  <option>Hungría</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Irak</option>
                  <option>Irán</option>
                  <option>Irlanda</option>
                  <option>Islandia</option>
                  <option>Islas Marshall</option>
                  <option>Islas Salomón</option>
                  <option>Israel</option>
                  <option>Italia</option>
                  <option>Jamaica</option>
                  <option>Japón</option>
                  <option>Jordania</option>
                  <option>Kazajistán</option>
                  <option>Kenia</option>
                  <option>Kirguistán</option>
                  <option>Kiribati</option>
                  <option>Kuwait</option>
                  <option>Laos</option>
                  <option>Lesoto</option>
                  <option>Letonia</option>
                  <option>Líbano</option>
                  <option>Liberia</option>
                  <option>Libia</option>
                  <option>Liechtenstein</option>
                  <option>Lituania</option>
                  <option>Luxemburgo</option>
                  <option>Macedonia del Norte</option>
                  <option>Madagascar</option>
                  <option>Malasia</option>
                  <option>Malaui</option>
                  <option>Maldivas</option>
                  <option>Malí</option>
                  <option>Malta</option>
                  <option>Marruecos</option>
                  <option>Mauricio</option>
                  <option>Mauritania</option>
                  <option>México</option>
                  <option>Micronesia</option>
                  <option>Moldavia</option>
                  <option>Mónaco</option>
                  <option>Mongolia</option>
                  <option>Montenegro</option>
                  <option>Mozambique</option>
                  <option>Namibia</option>
                  <option>Nauru</option>
                  <option>Nepal</option>
                  <option>Nicaragua</option>
                  <option>Níger</option>
                  <option>Nigeria</option>
                  <option>Noruega</option>
                  <option>Nueva Zelanda</option>
                  <option>Omán</option>
                  <option>Países Bajos</option>
                  <option>Pakistán</option>
                  <option>Palaos</option>
                  <option>Panamá</option>
                  <option>Papúa Nueva Guinea</option>
                  <option>Paraguay</option>
                  <option>Perú</option>
                  <option>Polonia</option>
                  <option>Portugal</option>
                  <option>Reino Unido</option>
                  <option>República Centroafricana</option>
                  <option>República Checa</option>
                  <option>República del Congo</option>
                  <option>República Democrática del Congo</option>
                  <option>República Dominicana</option>
                  <option>Ruanda</option>
                  <option>Rumanía</option>
                  <option>Rusia</option>
                  <option>Samoa</option>
                  <option>San Cristóbal y Nieves</option>
                  <option>San Marino</option>
                  <option>San Vicente y las Granadinas</option>
                  <option>Santa Lucía</option>
                  <option>Santo Tomé y Príncipe</option>
                  <option>Senegal</option>
                  <option>Serbia</option>
                  <option>Seychelles</option>
                  <option>Sierra Leona</option>
                  <option>Singapur</option>
                  <option>Siria</option>
                  <option>Somalia</option>
                  <option>Sri Lanka</option>
                  <option>Sudáfrica</option>
                  <option>Sudán</option>
                  <option>Sudán del Sur</option>
                  <option>Suecia</option>
                  <option>Suiza</option>
                  <option>Surinam</option>
                  <option>Tailandia</option>
                  <option>Tanzania</option>
                  <option>Tayikistán</option>
                  <option>Timor Oriental</option>
                  <option>Togo</option>
                  <option>Tonga</option>
                  <option>Trinidad y Tobago</option>
                  <option>Túnez</option>
                  <option>Turkmenistán</option>
                  <option>Turquía</option>
                  <option>Tuvalu</option>
                  <option>Ucrania</option>
                  <option>Uganda</option>
                  <option>Uruguay</option>
                  <option>Uzbekistán</option>
                  <option>Vanuatu</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Yemen</option>
                  <option>Yibuti</option>
                  <option>Zambia</option>
                  <option>Zimbabue</option>
                </Select>
              </Tooltip>
            </FormControl>
            <FormControl id="phoneNumber" isRequired mb={8}>
              <FormLabel>Teléfono</FormLabel>
              <Tooltip label="Escribe tu número de teléfono. No olvides incluir el prefijo. Por ejemplo, en España sería +34 999 888 777" aria-label="Teléfono Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="tel" placeholder="Escribe tu número de teléfono" />
              </Tooltip>
            </FormControl>
            <FormControl id="email" isRequired mb={8}>
              <FormLabel>Email</FormLabel>
              <Tooltip label="Escribe tu dirección de correo electrónico" aria-label="Email Tooltip" placement="top" hasArrow arrowSize={15}>
                <Input type="email" placeholder="Escribe tu dirección de correo electrónico" />
              </Tooltip>
            </FormControl>
            <div className="checkout-info__balcony checkout-info__balcony--second">
              <h3 className="checkout-info__balcony-title">Pago</h3>
            </div>
            <FormControl id="paymentMethod" isRequired mb={8}>
              <FormLabel>Forma de Pago</FormLabel>
              <Tooltip label="Selecciona tu método de pago preferido" aria-label="Forma de Pago Tooltip" placement="top-start" hasArrow arrowSize={15}>
                <RadioGroup defaultValue="braintree">
                  <Stack flexDirection="column">
                    <Radio value="braintree">Tarjeta de Crédito (Braintree)</Radio>
                    <Radio value="stripe">Tarjeta de Crédito (Stripe)</Radio>
                  </Stack>
                </RadioGroup>
              </Tooltip>
            </FormControl>
            <FormControl id="cardNumber" isRequired mb={8}>
              <FormLabel>Número de Tarjeta</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="expireDate" isRequired mb={8}>
              <FormLabel>Fecha de Caducidad</FormLabel>
              <Input type="text" placeholder="MM/AA" />
            </FormControl>
            <FormControl id="cvv" isRequired mb={8}>
              <FormLabel>CVV</FormLabel>
              <Input type="text" />
            </FormControl>
            {/* <FormControl id="delivery" isRequired mb={8}>
              <FormLabel>Envío</FormLabel>
              <Select>
                <option value="estandar">Envío Estándar (10€) - 5-6 días</option>
                <option value="premium">Envío Premium (10€) - 1 día</option>
              </Select>
            </FormControl> */}
            <Button className="checkout-info__submit-button" type="submit" width="full">
              Confirmar pago ( {totalCost}€ )
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default CheckoutData;
