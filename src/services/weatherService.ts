/* eslint-disable prefer-template */
/* eslint-disable camelcase */
// import { URL, URLSearchParams } from 'url';
import { WeatherDataFromServer } from '../react-app-env.d';

const API_KEY = 'a2b2aaf092bfed49f469662147c5bc42';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city: string): Promise<WeatherDataFromServer> => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);

  return response.json();
};

const formatCurrentWeather = (data: WeatherDataFromServer) => {
  const {
    coord: { lat, lon },
    main: {
      temp, feels_like, temp_min, temp_max, humidity,
    },
    name,
    dt,
    sys: {
      country, sunrise, sunset,
    },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    // eslint-disable-next-line max-len
    lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed,
  };
};

export const getFormattedWeatherData = async (city: string) => {
  const response = await getWeatherData(city);
  const formattedCurrentWeatherData = formatCurrentWeather(response);

  // const { lat, lon } = formattedCurrentWeatherData;

  // const formattedForecastWeather = await

  return formattedCurrentWeatherData;
};

// export const test = async (infoType: string, searchParams: object) => {
//   const url = new URL(`${BASE_URL}/${infoType}`);
//   // @ts-ignore
//   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

//   const response = await fetch(url);

//   return response.json();
// };
