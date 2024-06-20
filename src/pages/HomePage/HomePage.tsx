import "../HomePage/HomePage.scss";
import CategoryGridHome from "./CategoryGridHome/CategoryGridHome";
import SliderHome from "./SliderHome/SliderHome";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <SliderHome></SliderHome>
      <CategoryGridHome></CategoryGridHome>
    </div>
  );
};

export default HomePage;
