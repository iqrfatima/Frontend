export function WeatherCard({ 
  temperature, 
  condition, 
  city, 
  humidity, 
  windSpeed, 
  visibility, 
  pressure 
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        {/* <div className="flex-shrink-0">
          <CloudSunIcon className="w-20 h-20 text-yellow-500" />
        </div> */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            {temperature}°C
          </h2>
          <p className="text-gray-600 dark:text-gray-400 capitalize">
            {condition}
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        The current weather in <span className="font-bold">{city}</span> is 
        characterized by {condition}. Here's a detailed breakdown:
      </p>
      <ul className="mt-4 space-y-2">
        <li className="text-gray-600 dark:text-gray-400">
          <span className="font-medium">Humidity:</span> {humidity}%
        </li>
        <li className="text-gray-600 dark:text-gray-400">
          <span className="font-medium">Wind Speed:</span> {windSpeed} m/s
        </li>
        <li className="text-gray-600 dark:text-gray-400">
          <span className="font-medium">Visibility:</span> {visibility / 1000} km
        </li>
        <li className="text-gray-600 dark:text-gray-400">
          <span className="font-medium">Pressure:</span> {pressure} hPa
        </li>
      </ul>
    </div>
  );
}
