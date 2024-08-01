// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './Carouselcomp.css'; // Custom CSS file
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner1.jpg";

const Carouselcomp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
 <Slider {...settings}> 
        <div className="carousel-slide">
          <img src={Banner1} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={Banner2} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={Banner3} alt="Slide 3" />
        </div>
      </Slider> 
    </div>
  );
};

export default Carouselcomp;
