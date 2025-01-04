import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import as1 from "../images/as1.jpg"
const AutoCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000, // Change speed as needed
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <div className="flex justify-center h-full bg-white p-6">
          <img src={as1} alt="First slide" className="w-full sm:w-1/2 md:w-1/2 object-cover rounded-lg" />

          </div>
        </div>
        <div>
        <div className="flex justify-center h-full bg-white p-6">
          <img src={as1} alt="First slide" className="w-full sm:w-1/2 md:w-1/2 object-cover rounded-lg" />

          </div>  
        </div>
        <div>
        <div className="flex justify-center h-full bg-white p-6">
          <img src={as1} alt="First slide" className="w-full sm:w-1/2 md:w-1/2 object-cover rounded-lg" />

          </div> 
        </div>
      </Slider>
    </div>
  );
};

export default AutoCarousel;
