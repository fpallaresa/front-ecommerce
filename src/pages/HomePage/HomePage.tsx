import { useEffect, useState } from "react";
import "../HomePage/HomePage.scss";
import CategoryGridHome from "./CategoryGridHome/CategoryGridHome";
import SliderHome from "./SliderHome/SliderHome";
import { Category } from "../../models/Category";

const HomePage = (): JSX.Element => {
  const API_URL_CATEGORY = `${process.env.REACT_APP_API_URL as string}/categorie`;
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = (): void => {
    fetch(API_URL_CATEGORY, {
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
      .then((responseParsed: Category[]) => {
        setCategories(responseParsed);
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  }

  return (
    <div className="home-page">
      <SliderHome></SliderHome>
      {categories.length > 0 ? (
        categories?.map((categorie, index) => (
          <CategoryGridHome key={index} category={categorie} />
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};

export default HomePage;
