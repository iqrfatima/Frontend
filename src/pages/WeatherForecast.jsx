import { Navbar } from '@/mycomponents/navbar';
import WeatherPrediction from '@/services/forecast';
import React, { useState } from 'react';
import { InputCard } from '@/mycomponents/InputCard';
import Footer from '@/mycomponents/footer';


const WeatherForecast = () => {
  const [cityName, setCityName] = useState(''); // State to hold the city name

  const handleCitySubmit = (city) => {
    setCityName(city); // Set city name when form is submitted
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* Render InputCard initially and WeatherPrediction once the city is set */}

        <InputCard onCityChange={handleCitySubmit} />
        {cityName && <WeatherPrediction cityName={cityName} />}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default WeatherForecast;
