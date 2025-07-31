import React from "react";
import Slider from "react-slick";
import "./HeroSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slideimg1 from "../assets/slide1.jpeg";
import slideimg2 from "../assets/slide2.jpeg";
import slideimg3 from "../assets/slide3.jpeg";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[slideimg1, slideimg2, slideimg3].map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
