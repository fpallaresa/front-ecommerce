import { useEffect } from "react";
import "../HomePage/HomePage.scss";
import CategoryGridHome from "./CategoryGridHome/CategoryGridHome";
import SliderHome from "./SliderHome/SliderHome";

const HomePage = (): JSX.Element => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Añade un desplazamiento suave
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="home-page">
      <SliderHome></SliderHome>
      <CategoryGridHome/>
    </div>
  );
};

export default HomePage;
