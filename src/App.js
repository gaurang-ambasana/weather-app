import Search from "./components/Search";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import ForecastWeather from "./components/forecast-weather/ForecastWeather";
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from "./api";
import { useState } from "react";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const fetchWeatherData = (lat, lon, type) =>
    fetch(
      `${OPEN_WEATHER_API_URL}/${type}?appid=${OPEN_WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=metric`
    );

  const handleOnSearchChange = ({ value, label }) => {
    const [lat, lon] = value.split(` `);

    Promise.all([
      fetchWeatherData(lat, lon, "weather"),
      fetchWeatherData(lat, lon, "forecast"),
    ])
      .then(async ([weatherResponse, forecastResponse]) => {
        const weather = await weatherResponse.json();
        const forecast = await forecastResponse.json();
        const city = label;

        setCurrentWeather({ city, ...weather });
        setForecastWeather({ city, ...forecast });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather weatherData={currentWeather} />}
      <ForecastWeather />
    </div>
  );
};

export default App;
