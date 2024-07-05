import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import { ChakraProvider } from "@chakra-ui/react";
import CheckoutSuccessPage from "./pages/Checkout/CheckoutSuccessPage";
import { CartProvider } from "./CartContext";

const App = (): JSX.Element => {
  return (
    <ChakraProvider>
      <CartProvider>
        <div className="app">
          <HashRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/:categoryName" element={<CategoryPage></CategoryPage>}></Route>
              <Route path="/checkout" element={<Checkout></Checkout>}></Route>
              <Route path="/checkout/success" element={<CheckoutSuccessPage></CheckoutSuccessPage>}></Route>
            </Routes>
          </HashRouter>
          <Footer></Footer>
        </div>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;
