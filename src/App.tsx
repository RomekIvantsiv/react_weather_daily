import React, { useEffect, useState } from 'react';
import { Forecast } from './Components/Forecast';
import { Inputs } from './Components/Inputs';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import { TimeAndLocation } from './Components/TimeAndLocation';
import { TopButtons } from './Components/TopButtons';
import { WeatherState } from './react-app-env.d';
import { getFormattedWeatherData } from './services/weatherService';

// import UilReact from '@iconscout/react-unicons/icons/uil-react';

export const App = () => {
  const [query, setQuery] = useState({ q: 'berlin' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState<WeatherState | null>(null);

  const changeQuery = () => {
    
  };

  useEffect(() => {
    const getWeatherFromServer = async () => {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
    };

    getWeatherFromServer();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourlyResult} />
          <Forecast title="daily forecast" items={weather.dailyResult} />
        </>
      )}

    </div>
  );
};
