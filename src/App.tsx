import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Forecast } from './Components/Forecast';
import { InputAndConfigButtons } from './Components/InputAndConfigButtons';
import { TemperatureAndDetails } from './Components/TemperatureAndDetails';
import { TimeAndLocation } from './Components/TimeAndLocation';
import { TopButtons } from './Components/TopButtons';
import { getFormattedWeatherData } from './services/weatherService';
import { getQuerySelector, getUnitsSelector, getWeatherSelector } from './store/selectors';
import { setWeather } from './store/store';

export const App = () => {
  const query = useSelector(getQuerySelector);
  const units = useSelector(getUnitsSelector);
  const weather = useSelector(getWeatherSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const getWeatherFromServer = async () => {
      const data = await getFormattedWeatherData({ ...query, units });
      dispatch(setWeather(data));
    };

    getWeatherFromServer();
  }, [query, units]);

  const formatBackgound = () => {
    if (!weather) {
      return 'from-cyan-700 to-blue-700';
    }

    const threshold = units === 'metric' ? 30 : 60;
    if (weather.temp <= threshold && units === 'metric') {
      return 'from-cyan-700 to-blue-700';
    }

    return 'from-yellow-700 to-orange-700';
  };

  return (
    <div className={`${formatBackgound()} mx-auto max-w-screen-tablet700 py-5 px-32 phonexs:px-3 phone:px-9 tablet:px-12 tablet550:px-16 tablet600:px-20 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 mt-0`}>
      <TopButtons />
      <InputAndConfigButtons />

      {weather && (
        <>
          <TimeAndLocation />
          <TemperatureAndDetails />
          <Forecast title="hourly forecast" items={weather.hourlyResult} />
          <Forecast title="daily forecast" items={weather.dailyResult} />
        </>
      )}

      <ToastContainer autoClose={3000} theme="colored" position="top-right" />
    </div>
  );
};
