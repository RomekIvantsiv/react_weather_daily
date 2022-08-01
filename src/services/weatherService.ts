/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */
/* eslint-disable camelcase */
// @ts-ignore
import { DateTime } from 'luxon';
import {
  DailyWeatherData,
  WeatherDataFromServer,
} from '../react-app-env.d';

interface searchParamsType {
  units: string,
  q: string,
}

const API_KEY = 'a2b2aaf092bfed49f469662147c5bc42';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (infoType: string, searchParams: object) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  // @ts-ignore
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  const response = await fetch(url);

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

const formatToLocalTime = (secs: number, zone: number, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatForecastWeather = (data: DailyWeatherData) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((oneDay) => {
    return {
      title: formatToLocalTime(oneDay.dt, timezone, 'ccc'),
      temp: oneDay.temp.day,
    };
  });
};

export const getFormattedWeatherData = async (searchParams: searchParamsType) => {
  const response = await getWeatherData('weather', searchParams);
  const formattedWeatherData = formatCurrentWeather(response);

  const { lat, lon } = formattedWeatherData;

  const formattedForecastWeather = await getWeatherData('onecall', {
    lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units,
  });

  console.log(formattedForecastWeather);

  return formattedWeatherData;
};

// export const getFormattedWeatherData = async (city: string) => {
//   const response = await getWeatherData(city);
//   const formattedCurrentWeatherData = formatCurrentWeather(response);

//   // const { lat, lon } = formattedCurrentWeatherData;

//   // const formattedForecastWeather = await

//   return formattedCurrentWeatherData;
// };
