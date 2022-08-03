import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Forecast } from './Components/Forecast';
import { Inputs } from './Components/Inputs';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import { TimeAndLocation } from './Components/TimeAndLocation';
import { TopButtons } from './Components/TopButtons';
import { searchParamsType, WeatherState } from './react-app-env.d';
import { getFormattedWeatherData } from './services/weatherService';

export const App = () => {
  const [query, setQuery] = useState<searchParamsType>({ q: 'warsaw' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState<WeatherState | null>(null);

  const onChangeQuery = (newQuery: searchParamsType) => {
    setQuery(newQuery);
  };

  const onChangeUnits = (newUnits: string) => {
    setUnits(newUnits);
  };

  useEffect(() => {
    const getWeatherFromServer = async () => {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
    };

    getWeatherFromServer();
  }, [query, units]);

  const formatBackgound = () => {
    if (!weather) {
      return 'from-cyan-700 to-blue-700';
    }

    const threshold = units === 'metric' ? 30 : 60;
    if (weather.temp <= threshold) {
      return 'from-cyan-700 to-blue-700';
    }

    return 'from-yellow-700 to-orange-700';
  };

  return (
    <div className={`${formatBackgound()} mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 mt-0`}>
      <TopButtons onChangeQuery={onChangeQuery} />
      <Inputs units={units} onChangeQuery={onChangeQuery} onChangeUnits={onChangeUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourlyResult} />
          <Forecast title="daily forecast" items={weather.dailyResult} />
        </>
      )}

      <ToastContainer autoClose={3000} theme="colored" position="top-right" />
    </div>
  );
};
