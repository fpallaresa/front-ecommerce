import "./CategoryGridHome.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartItem, Product } from "../../../models/Product";
import addtocart from "../../../assets/addtocart.svg";
import { useCart } from "../../../CartContext";

const CategoryGridHome = (): JSX.Element => {
  const API_URL_PRODUCT_BY_CATEGORY = `${process.env.REACT_APP_API_URL as string}/product/featured?limit=6`;
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const { updateCart, updateCartItems } = useCart();

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
    updateCartItems();
  };

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
                        setMessage("¡El producto ha sido agregado al carrito!");
                        setTimeout(() => {
                          setMessage(null);
                        }, 2000);
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
