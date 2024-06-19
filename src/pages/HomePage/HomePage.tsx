import "../HomePage/HomePage.scss";
import Header from "../../components/Header/Header";
import CategoryGridHome from "./CategoryGridHome/CategoryGridHome";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <Header></Header>
      <CategoryGridHome></CategoryGridHome>
    </div>
  );
};

export default HomePage;
