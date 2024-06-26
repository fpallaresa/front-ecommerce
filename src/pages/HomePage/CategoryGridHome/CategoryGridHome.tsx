import "./CategoryGridHome.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../../models/Product";
import addtocart from "../../../assets/addtocart.svg";

const CategoryGridHome = (): JSX.Element => {
  const API_URL_PRODUCT_BY_CATEGORY = `${process.env.REACT_APP_API_URL as string}/product/featured?limit=6`;
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className="category-grid">
      <div className="category-grid__balcony">
        <h3 className="category-grid__balcony-title">PRODUCTOS DESTACADOS</h3>
      </div>
      <div className="category-grid__container">
        {products?.map((product, index) => (
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
                  className="category-grid__add-to-cart"
                  src={addtocart}
                  alt="Add to cart button"
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

export default CategoryGridHome;
