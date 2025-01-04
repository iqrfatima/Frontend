import React from 'react';

function ForecastCard({ forecastData }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const getHourlyDataForDay = (dayIndex) => {
    return forecastData.list.filter((item, index) => {
      const date = new Date(item.dt * 1000);
      return date.getDate() === new Date(forecastData.list[dayIndex].dt * 1000).getDate();
    });
  };

  return (
    <div className="forecast-card mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, index) => {
          const hourlyData = getHourlyDataForDay(index * 8); // Get hourly data for each day (each day has data for every 3 hours)
          const dayTemperature = hourlyData[0].main.temp;
          const dayCondition = hourlyData[0].weather[0].description;
          const dayIcon = hourlyData[0].weather[0].icon;
          const dayMinTemp = Math.min(...hourlyData.map(item => item.main.temp_min));
          const dayMaxTemp = Math.max(...hourlyData.map(item => item.main.temp_max));
          const dayHumidity = Math.max(...hourlyData.map(item => item.main.humidity));
          const dayPressure = Math.max(...hourlyData.map(item => item.main.pressure));

          return (
            <div key={index} className="flex flex-col items-center">
              <p className="text-gray-600 dark:text-gray-400">{formatDate(hourlyData[0].dt)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${dayIcon}@2x.png`}
                alt={dayCondition}
                className="w-12 h-12 my-2"
              />
              <p className="text-gray-800 dark:text-gray-100 font-bold">{Math.round(dayTemperature)}°C</p>
              <p className="text-gray-600 dark:text-gray-400">{Math.round(dayMinTemp)}°C - {Math.round(dayMaxTemp)}°C</p>
              <p className="text-gray-600 dark:text-gray-400">humidity : {dayHumidity} </p>
              <p className="text-gray-600 dark:text-gray-400">pressure : {dayPressure}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastCard;
