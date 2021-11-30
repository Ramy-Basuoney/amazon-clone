import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slides.scss";
// import {
//   MdOutlineArrowForwardIos,
//   MdOutlineArrowBackIos,
// } from "react-icons/md";

const Slides = () => {
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow right" onClick={onClick}>
  //       <MdOutlineArrowForwardIos />
  //     </div>
  //   );
  // };

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow left" onClick={onClick}>
  //       <MdOutlineArrowBackIos />
  //     </div>
  //   );
  // };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <div className="main-slider">
      <Slider className="main-slider__container" {...settings}>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
