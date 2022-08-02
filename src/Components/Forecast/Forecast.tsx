import React from 'react';
import { FormattedHourlyWeather } from '../../react-app-env.d';
import { iconUrlFromCode } from '../../services/weatherService';

interface Props {
  title: string,
  items: FormattedHourlyWeather[],
}

export const Forecast:React.FC<Props> = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center justify-center">
            <p className="font-white text-sm">
              {item.title}
            </p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}

      </div>
    </div>
  );
};
