/* eslint-disable react/function-component-definition */
import React from 'react';

interface Props {
  title: string,
}

export const Forecast:React.FC<Props> = ({ title }) => (
  <div>
    <div className="flex items-center justify-start mt-6">
      <p className="text-white font-medium uppercase">{title}</p>
    </div>
    <hr className="my-2" />

    <div className="flex flex-row items-center justify-between text-white">

      <div className="flex flex-col items-center justify-center">
        <p className="font-white text-sm">
          04:30 PM
        </p>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          className="w-12 my-1"
          alt=""
        />
        <p className="font-medium">22°</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-white text-sm">
          04:30 PM
        </p>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          className="w-12 my-1"
          alt=""
        />
        <p className="font-medium">22°</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-white text-sm">
          04:30 PM
        </p>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          className="w-12 my-1"
          alt=""
        />
        <p className="font-medium">22°</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-white text-sm">
          04:30 PM
        </p>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          className="w-12 my-1"
          alt=""
        />
        <p className="font-medium">22°</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-white text-sm">
          04:30 PM
        </p>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          className="w-12 my-1"
          alt=""
        />
        <p className="font-medium">22°</p>
      </div>

    </div>
  </div>
);
