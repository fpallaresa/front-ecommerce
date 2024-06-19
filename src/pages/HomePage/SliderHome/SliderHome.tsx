import "./SliderHome.scss";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = (): JSX.Element => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="feat-slider">
      <Slider {...settings}>
        <div className="feat-slider__item">
          <NavLink className="feat-slider__link" to="#" title="">
            <div className="feat-slider__image">
              <div className="feat-slider__info">
                <span className="feat-slider__category">Category</span>
                <h2 className="feat-slider__title">Lorem ipsum dolor sit amet</h2>
                <span className="feat-slider__price">15€</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="feat-slider__item">
          <NavLink className="feat-slider__link" to="#" title="">
            <div className="feat-slider__image">
              <div className="feat-slider__info">
                <span className="feat-slider__category">Category</span>
                <h2 className="feat-slider__title">Lorem ipsum dolor sit amet</h2>
                <span className="feat-slider__price">15€</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="feat-slider__item">
          <NavLink className="feat-slider__link" to="#" title="">
            <div className="feat-slider__image">
              <div className="feat-slider__info">
                <span className="feat-slider__category">Category</span>
                <h2 className="feat-slider__title">Lorem ipsum dolor sit amet</h2>
                <span className="feat-slider__price">15€</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="feat-slider__item">
          <NavLink className="feat-slider__link" to="#" title="">
            <div className="feat-slider__image">
              <div className="feat-slider__info">
                <span className="feat-slider__category">Category</span>
                <h2 className="feat-slider__title">Lorem ipsum dolor sit amet</h2>
                <span className="feat-slider__price">15€</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="feat-slider__item">
          <NavLink className="feat-slider__link" to="#" title="">
            <div className="feat-slider__image">
              <div className="feat-slider__info">
                <span className="feat-slider__category">Category</span>
                <h2 className="feat-slider__title">Lorem ipsum dolor sit amet</h2>
                <span className="feat-slider__price">15€</span>
              </div>
            </div>
          </NavLink>
        </div>
      </Slider>
    </div>
  );
};

export default SliderHome;
