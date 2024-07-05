/* eslint-disable @typescript-eslint/no-unused-vars */
import "./CategoryPageGrid.scss";
import { NavLink } from "react-router-dom";
import filter from "../../../assets/filter.svg";
import dummy from "../../../assets/dummy.png";
import addtocart from "../../../assets/addtocart.svg";
import { Product, CartItem } from "../../../models/Product";
import { useState } from "react";
import { useCart } from "../../../CartContext";

interface ProductCategoryProps {
  categoryProductData: Product[] | null;
  totalProducts: string | null;
}

const APP_BASE_PATH: string = "/product_images/";

const GridCategoryPage = ({ categoryProductData, totalProducts }: ProductCategoryProps): JSX.Element => {
  // Alerta de confirmación de que el producto se ha agregado al carrito
  const [message, setMessage] = useState<string | null>(null);
  const { updateCart } = useCart();

  const addToCart = (product: Product, skuId: string): void => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    let existe = false;
    cart.forEach((product, index) => {
      if (product.sku === skuId) {
        existe = true;
        cart[index].quantity += 1;
      }
    });
    if (!existe) {
      const sku = product.sku[skuId];
      const cartItem: CartItem = {
        productId: product._id,
        productName: product.title.es,
        productPrice: product.price.EUR,
        stock: sku.stock,
        sku: skuId,
        quantity: 1, // Lo dejo así por defecto
        image: product.imageSquare,
      };
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    updateCart();
    setMessage("¡El producto ha sido agregado al carrito!");
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  return (
    <div className="category-page-grid">
      {message && <div className="category-page-grid__message">{message}</div>}
      <div className="category-page-grid__utils">
        <div className="category-page-grid__filters">
          <img className="category-page-grid__filters-image" src={filter} alt="" />
          <span className="category-page-grid__filters-title">Filtrar / Ordenar</span>
        </div>
        <span className="category-page__total-items">{totalProducts ? `${totalProducts} productos` : "Cargando..."}</span>
      </div>
      <div className="category-page-grid__container">
        {categoryProductData?.map((product, index) => {
          const firstSkuKey = Object.keys(product.sku)[0];
          const firstSku = product.sku[firstSkuKey];
          return (
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
                    className={`category-page-grid__add-to-cart ${firstSku.stock > 0 ? "" : "¡Sin stock!"}`}
                    src={addtocart}
                    alt="Add to cart button"
                    onClick={() => {
                      if (firstSku.stock > 0) {
                        addToCart(product, firstSkuKey);
                      }
                    }}
                    style={{ opacity: firstSku.stock > 0 ? 1 : 0.5 }}
                  />
                  <p className="category-page-grid__add-to-cart-text"></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridCategoryPage;
