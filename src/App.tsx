import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/:category" element={<CategoryPage></CategoryPage>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
