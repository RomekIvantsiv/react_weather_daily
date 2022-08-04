import React from 'react';
import { useSelector } from 'react-redux';
import { formatToLocalTime } from '../../services/weatherService';
import { getWeatherSelector } from '../../store/selectors';
import { Loader } from '../Loader';

export const TimeAndLocation:React.FC = () => {
  const weather = useSelector(getWeatherSelector);

  if (!weather) {
    return (
      <Loader />
    );
  }

  const {
    dt, timezone, name, country,
  } = weather;
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white phone:text-xl phonexs:text-s font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white phone:text-3xl phonexs:text-2xl font-medium py-3">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};
