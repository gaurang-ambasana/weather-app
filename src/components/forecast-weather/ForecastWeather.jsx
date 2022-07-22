import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast-weather.css";

const ForecastWeather = ({ forecastData }) => {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const presentDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(presentDay).concat(WEEK_DAYS);

  return (
    <>
      <label className="title">Weather Forecast</label>
      <Accordion allowZeroExpanded>
        {forecastData.list
          .splice(0, 8)
          .map(({ weather, main, clouds, wind }, i) => (
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${weather[0].icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label className="day">{forecastDays[i]}</label>
                    <label className="desc">{weather[0].description}</label>
                    <label className="avg">
                      {Math.round((main.temp_min + main.temp_max) / 2)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{main.pressure} hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds</label>
                    <label>{clouds.all}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind</label>
                    <label>{wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea Level</label>
                    <label>{main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feel Like</label>
                    <label>{main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
