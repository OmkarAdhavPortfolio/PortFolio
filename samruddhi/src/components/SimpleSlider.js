import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Slider.css"; // Import custom CSS for styling

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 1 slide on smaller screens, this will adjust in CSS
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    centerMode: false, // Turn off centering for small screens
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // For medium screens (e.g. tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For small screens (e.g. phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <h2 style={{ textAlign: 'center', margin: '20px auto' }}>Our Partners</h2>
    <Slider {...settings}>
      <div className="slider-item">
        <img src="./img/part1.png"></img>
      </div>
      <div className="slider-item">
      <img src="./img/part2.png"></img>
      </div>

      <div className="slider-item">
      <img src="./img/part3.png"></img>
      </div>
      <div className="slider-item">
      <img src="./img/part4.png"></img>
      </div>
      <div className="slider-item">
      <img src="./img/part5.png"></img>
      </div>
      <div className="slider-item">
      <img src="./img/part6.png"></img>
      </div>
    </Slider>
    </>
  );
}
