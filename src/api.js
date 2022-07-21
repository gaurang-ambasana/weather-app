const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3f49394ba6msha59566260dff6ebp1988e1jsn90d496a6efdc",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const GEO_API_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo`;
const OPEN_WEATHER_API_KEY = `47067dad259f12a0ad5698f5ea47b58d`;
const OPEN_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5`;

export {
  GEO_API_OPTIONS,
  GEO_API_URL,
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_KEY,
};
