import React from 'react';
import { Forecast } from './Components/Forecast';
import { Inputs } from './Components/Inputs';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import { TimeAndLocation } from './Components/TimeAndLocation';
import { TopButtons } from './Components/TopButtons';
import { getFormattedWeatherData } from './services/weatherService';

// import UilReact from '@iconscout/react-unicons/icons/uil-react';

export const App = () => {
  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData('wroclaw');
  //   console.log(data);
  // };

  // fetchWeather();

  const testWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'london' });
    console.log('test', data);
  };

  testWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="hourly forecast" />
    </div>
  );
};
