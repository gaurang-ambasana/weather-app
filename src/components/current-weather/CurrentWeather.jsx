import "./current-weather.css";

const CurrentWeather = ({ weatherData }) => {
  const { city, weather, main, wind } = weatherData;
  const { description, icon } = weather[0];
  const { temp, feels_like, humidity, pressure } = main;
  const { speed } = wind;

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-desc">{description}</p>
        </div>
        <img src={`icons/${icon}.png`} alt="weather" className="waether-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">More Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-Value">{feels_like}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-Value">{speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-Value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-Value">{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
