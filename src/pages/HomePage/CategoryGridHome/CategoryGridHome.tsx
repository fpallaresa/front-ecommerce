import "./CategoryGridHome.scss";
import { NavLink } from "react-router-dom";
import dummy from "../../../assets/dummy.png";
import { useEffect, useState } from "react";
import { Product } from "../../../models/Product";

const CategoryGridHome = (props: any): JSX.Element => {
  const API_URL_PRODUCT_BY_CATEGORY = `${process.env.REACT_APP_API_URL as string}/product/category/${props.category._id as string}`;
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
      .then((responseParsed: Product[]) => {
        setProducts(responseParsed);
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="category-grid">
      <div className="category-grid__balcony">
        <NavLink className="category-grid__link" to="#" title="">
          <h3 className="category-grid__balcony-title">{props.category.name.es}</h3>
        </NavLink>
      </div>
      <div className="category-grid__container">
        {products?.map((product, index) => (
          <div key={index} className="category-grid__info">
            <NavLink className="category-grid__link" to="#" title="">
              <img className="category-grid__image" src={dummy} alt="" />
            </NavLink>
            <NavLink className="category-grid__link" to="#" title="">
              <h4 className="category-grid__title">{product?.title?.es}</h4>
            </NavLink>
            <span className="category-grid__price">{product?.price?.EUR}€</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGridHome;
