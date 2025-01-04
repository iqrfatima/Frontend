import React, { useEffect, useState } from 'react';
import { WeatherCard } from '@/mycomponents/weathercard';
import ForecastCard from '@/mycomponents/ForecastCard';
import { SkeletonCard } from '@/mycomponents/SkeletonCard';

function WeatherPrediction({ cityName }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // New state for forecast data

  useEffect(() => {
    if (!cityName) return;

    const fetchWeatherData = async () => {
      try {
        const apiKey = '0471886dbcab445177ada923c19f43d8';
        const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

        // Fetch current weather data
        const responseWeather = await fetch(apiUrlWeather);
        const dataWeather = await responseWeather.json();
        setWeatherData(dataWeather);

        // Fetch 5-day forecast data
        const responseForecast = await fetch(apiUrlForecast);
        const dataForecast = await responseForecast.json();
        setForecastData(dataForecast); // Set forecast data
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [cityName]);

  // Display loading message while data is being fetched
  if (!weatherData || !forecastData) {
    return <SkeletonCard/>
  }

  return (
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <WeatherCard
        temperature={weatherData.main.temp}
        condition={weatherData.weather[0].description}
        city={weatherData.name}
        humidity={weatherData.main.humidity}
        windSpeed={weatherData.wind.speed}
        visibility={weatherData.visibility}
        pressure={weatherData.main.pressure}
      />
      <ForecastCard forecastData={forecastData} /> {/* Pass forecastData to ForecastCard */}
    </div>
  );
}

export default WeatherPrediction;
