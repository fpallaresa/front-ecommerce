import "./CategoryGridHome.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product, CartItem } from "../../../models/Product";
import addtocart from "../../../assets/addtocart.svg";

const CategoryGridHome = (): JSX.Element => {
  const API_URL_PRODUCT_BY_CATEGORY = `${process.env.REACT_APP_API_URL as string}/product/featured?limit=6`;
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = (): void => {
    fetch(API_URL_PRODUCT_BY_CATEGORY, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
          return;
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setProducts(responseParsed.data as Product[]);
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  // Lógica del carrito
  const addToCart = (product: Product, skuId: string): void => {
    const sku = product.sku[skuId];
    const cartItem: CartItem = {
      productId: product._id,
      productName: product.title.es,
      productPrice: product.price.EUR,
      stock: sku.stock,
      sku: skuId,
      quantity: 1, // Lo dejo así por defecto
    };
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    updateCartIndicador();
    setMessage("¡El producto ha sido agregado al carrito!");
    setTimeout(() => {
      setMessage(null);
    }, 2000);
    console.log("al carrito: ", cartItem);
  };

  const updateCartIndicador = (): void => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const cartIndicator = document.getElementById("cart-indicator");
    if (cartIndicator) {
      cartIndicator.textContent = cart.length.toString();
    }
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", updateCartIndicador);
  }, []);

  return (
    <div className="category-grid">
      {message && <div className="category-grid__message">{message}</div>}
      <div className="category-grid__balcony">
        <h3 className="category-grid__balcony-title">PRODUCTOS DESTACADOS</h3>
      </div>
      <div className="category-grid__container">
        {products?.map((product, index) => {
          const firstSkuKey = Object.keys(product.sku)[0];
          const firstSku = product.sku[firstSkuKey];
          return (
            <div className="category-grid__info-container" key={index}>
              <NavLink className="category-grid__link" to="#" title="">
                <img className="category-grid__image" src={`/product_images/${product?.imageSquare}`} alt="" />
              </NavLink>
              <div className="category-grid__info">
                <div className="category-grid__info-product">
                  <NavLink className="category-grid__link" to="#" title="">
                    <h4 className="category-grid__title">{product?.title?.es}</h4>
                  </NavLink>
                  <span className="category-grid__price">{product?.price?.EUR}€</span>
                </div>
                <div className="category-grid__info-shopping">
                  <img
                    className={`category-page-grid__add-to-cart ${firstSku.stock > 0 ? "" : "out-of-stock"}`}
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

export default CategoryGridHome;
