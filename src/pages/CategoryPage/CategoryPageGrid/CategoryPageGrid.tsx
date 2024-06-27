/* eslint-disable @typescript-eslint/no-unused-vars */
import "./CategoryPageGrid.scss";
import { NavLink } from "react-router-dom";
import filter from "../../../assets/filter.svg";
import dummy from "../../../assets/dummy.png";
import addtocart from "../../../assets/addtocart.svg";
import { Product } from "../../../models/Product";
import { useState } from "react";

interface ProductCategoryProps {
  categoryProductData: Product[] | null;
}

const APP_BASE_PATH: string = "/product_images/";

const GridCategoryPage = ({ categoryProductData }: ProductCategoryProps): JSX.Element => {
  // Alerta de confirmación de que el producto se ha agregado al carrito
  const [message, setMessage] = useState<string | null>(null);

  const addToCart = (product: Product): void => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    updateCartIndicador();
    setMessage("¡El producto ha sido agregado al carrito!");
    setTimeout(() => {
      setMessage(null);
    }, 2000)
    console.log(cart)
  };

  const updateCartIndicador = (): void => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const cartIndicator = document.getElementById("cart-indicator");
    if (cartIndicator) {
      cartIndicator.textContent = cart.length.toString();
    }
  };

  document.addEventListener("DOMContentLoaded", updateCartIndicador);

  return (
    <div className="category-page-grid">
      {message && <div className="category-page-grid__message">{message}</div>}
      <div className="category-page-grid__utils">
        <div className="category-page-grid__filters">
          <img className="category-page-grid__filters-image" src={filter} alt="" />
          <span className="category-page-grid__filters-title">Filtrar / Ordenar</span>
        </div>
        <span className="category-page__total-items">{categoryProductData ? `${categoryProductData.length} productos` : "Cargando..."}</span>
      </div>
      <div className="category-page-grid__container">
        {categoryProductData?.map((product, index) => (
          <div className="category-page-grid__info-container" key={index}>
            <NavLink className="category-page-grid__link" to="#" title="">
              <img className="category-page-grid__image" src={product?.imageSquare ? `${APP_BASE_PATH}${product?.imageSquare}` : dummy} alt={product?.title?.es} />
            </NavLink>
            <div className="category-page-grid__info">
              <div className="category-page-grid__info-product">
                <NavLink className="category-page-grid__link" to="#" title={product?.title?.es}>
                  <h4 className="category-page-grid__title">{product?.title?.es}</h4>
                </NavLink>
                <span className="category-page-grid__price">{product?.price?.EUR}€</span>
              </div>
              <div className="category-page-grid__info-shopping">
                <img
                  className="category-page-grid__add-to-cart"
                  src={addtocart}
                  alt="Add to cart button"
                  onClick={() => {
                    addToCart(product);
                  }}
                />
                <p className="category-page-grid__add-to-cart-text"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCategoryPage;
