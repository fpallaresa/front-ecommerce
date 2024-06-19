import "../HomePage/HomePage.scss";
import Header from "../../components/Header/Header";
import CategoryGridHome from "./CategoryGridHome/CategoryGridHome";
import SliderHome from "./SliderHome/SliderHome";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <Header></Header>
      <SliderHome></SliderHome>
      <CategoryGridHome></CategoryGridHome>
    </div>
  );
};

export default HomePage;
