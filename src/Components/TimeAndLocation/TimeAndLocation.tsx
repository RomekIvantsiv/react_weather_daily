import React from 'react';
import { WeatherState } from '../../react-app-env.d';
import { formatToLocalTime } from '../../services/weatherService';

interface Props {
  weather: WeatherState;
}

export const TimeAndLocation:React.FC<Props> = ({ weather }) => {
  const {
    dt, timezone, name, country,
  } = weather;

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};
