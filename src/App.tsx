import React, { useEffect, useState } from 'react';
import { Forecast } from './Components/Forecast';
import { Inputs } from './Components/Inputs';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import { TimeAndLocation } from './Components/TimeAndLocation';
import { TopButtons } from './Components/TopButtons';
import { searchParamsType, WeatherState } from './react-app-env.d';
import { getFormattedWeatherData } from './services/weatherService';

export const App = () => {
  const [query, setQuery] = useState<searchParamsType>({ q: 'berlin' });
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

    const threshold = units === 'metric' ? 25 : 60;
    if (weather.temp <= threshold) {
      return 'from-cyan-700 to-blue-700';
    }

    return 'from-yellow-700 to-orange-700';
  };

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackgound()}`}>
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

    </div>
  );
};
