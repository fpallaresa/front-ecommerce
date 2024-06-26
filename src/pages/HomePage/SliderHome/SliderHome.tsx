import "./SliderHome.scss";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1image from "../../../assets/product_images/01_large-min.jpg";
import slider2image from "../../../assets/product_images/02_large-min.jpg";
import slider3image from "../../../assets/product_images/03_large-min.jpg";
import slider4image from "../../../assets/product_images/04_large-min.jpg";
import slider5image from "../../../assets/product_images/05_large-min.jpg";
import slider1imageMobile from "../../../assets/product_images/01_large-mobile-min.jpg";
import slider2imageMobile from "../../../assets/product_images/02_large-mobile-min.jpg";
import slider3imageMobile from "../../../assets/product_images/03_large-mobile-min.jpg";
import slider4imageMobile from "../../../assets/product_images/04_large-mobile-min.jpg";
import slider5imageMobile from "../../../assets/product_images/05_large-mobile-min.jpg";

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
          <div className="feat-slider__link feat-slider__link--marketing1">
            <div className="feat-slider__container">
              <picture className="feat-slider__image-container">
                <source srcSet={slider2imageMobile} media="(max-width: 767px)" />
                <img className="feat-slider__image" src={slider2image} alt="Rebajas" />
              </picture>
              <div className="feat-slider__info">
                <h2 className="feat-slider__title">Rebajas</h2>
                <span className="feat-slider__offer">Hasta un -40%</span>
                <div className="feat-slider__links-category">
                  <NavLink className="feat-slider__link-category" to="/mujer" title="">
                    Mujer
                  </NavLink>
                  <NavLink className="feat-slider__link-category" to="/hombre" title="">
                    Hombre
                  </NavLink>
                  <NavLink className="feat-slider__link-category" to="/infantil" title="">
                    Infantil
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feat-slider__item">
          <div className="feat-slider__link feat-slider__link--marketing2">
            <div className="feat-slider__container">
              <picture className="feat-slider__image-container">
                <source srcSet={slider1imageMobile} media="(max-width: 767px)" />
                <img className="feat-slider__image" src={slider1image} alt="ReWalk" />
              </picture>
              <div className="feat-slider__info feat-slider__info--marketing2">
                <h2 className="feat-slider__title feat-slider__title--marketing2">ReWalk</h2>
                <span className="feat-slider__offer feat-slider__offer--marketing2">Una colección de zapatos de segunda mano y segundas calidades listos para caminar de nuevo.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="feat-slider__item">
          <div className="feat-slider__link">
            <div className="feat-slider__container">
              <picture className="feat-slider__image-container">
                <source srcSet={slider3imageMobile} media="(max-width: 767px)" />
                <img className="feat-slider__image" src={slider3image} alt="Regalos para todo el mundo" />
              </picture>
              <div className="feat-slider__info feat-slider__info--marketing3">
                <h2 className="feat-slider__title feat-slider__title--marketing3">Regalos para todo el mundo</h2>
                <div className="feat-slider__links-category">
                  <NavLink className="feat-slider__link-category feat-slider__link-category--marketing3" to="/hombre" title="">
                    Comprar para hombre
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feat-slider__item">
          <div className="feat-slider__link">
            <div className="feat-slider__container">
              <picture className="feat-slider__image-container">
                <source srcSet={slider4imageMobile} media="(max-width: 767px)" />
                <img className="feat-slider__image" src={slider4image} alt="Luce tu estilo" />
              </picture>
              <div className="feat-slider__info feat-slider__info--marketing4">
                <h2 className="feat-slider__title feat-slider__title--marketing4">Luce tu estilo</h2>
                <span className="feat-slider__offer feat-slider__offer--marketing4">Usa los hashtags #lunalane y #lunalaneStyle en Instagram para tener la oportunidad de aparecer en nuestros contenidos.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="feat-slider__item">
          <div className="feat-slider__link">
            <div className="feat-slider__container">
              <picture className="feat-slider__image-container">
                <source srcSet={slider5imageMobile} media="(max-width: 767px)" />
                <img className="feat-slider__image" src={slider5image} alt="Básicos de running" />
              </picture>
              <div className="feat-slider__info feat-slider__info--marketing5">
                <h2 className="feat-slider__title feat-slider__title--marketing5">Básicos de running</h2>
                <div className="feat-slider__links-category feat-slider__links-category--marketing5">
                  <span className="feat-slider__offer feat-slider__offer--marketing5">No pierdas el ritmo con las nuevas equipaciones de running.</span>
                  <NavLink className="feat-slider__link-category feat-slider__link-category--marketing5" to="/infantil" title="Descubre más">
                    Descubre más
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderHome;
