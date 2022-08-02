// @ts-ignore
import { DateTime } from 'luxon';
import { toast } from 'react-toastify';
import {
  DailyWeatherData,
  searchParamsType,
  WeatherDataFromServer,
} from '../react-app-env.d';

const API_KEY = 'a2b2aaf092bfed49f469662147c5bc42';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (infoType: string, searchParams: object) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  // @ts-ignore
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);

  if (response.statusText === 'Not Found') {
    toast.error('The city was not found');
  }

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

export const formatToLocalTime = (secs: number, zone: number, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"): string => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatForecastWeather = (data: DailyWeatherData) => {
  const { timezone, daily, hourly } = data;

  const dailyResult = daily.slice(1, 6).map((oneDay) => {
    return {
      title: formatToLocalTime(oneDay.dt, timezone, 'ccc'),
      temp: oneDay.temp.day,
      icon: oneDay.weather[0].icon,
    };
  });

  const hourlyResult = hourly.slice(1, 6).map((oneHour) => {
    return {
      title: formatToLocalTime(oneHour.dt, timezone, 'hh:mm a'),
      temp: oneHour.temp,
      icon: oneHour.weather[0].icon,
    };
  });

  return { timezone, dailyResult, hourlyResult };
};

export const getFormattedWeatherData = async (searchParams: searchParamsType) => {
  const responseWeather = await getWeatherData('weather', searchParams);
  const formattedWeatherData = formatCurrentWeather(responseWeather);

  const { lat, lon } = formattedWeatherData;

  const responseOneCall = await getWeatherData('onecall', {
    lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units,
  });

  const formattedForecastWeather = formatForecastWeather(responseOneCall);

  const result = { ...formattedWeatherData, ...formattedForecastWeather };

  return result;
};

export const iconUrlFromCode = (code: string) => `https://openweathermap.org/img/wn/${code}@2x.png`;
