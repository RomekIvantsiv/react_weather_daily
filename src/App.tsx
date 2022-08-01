import React from 'react';
// @ts-ignore
import { Forecast } from './Components/Forecast/Forecast.tsx';
// @ts-ignore
import Inputs from './Components/Inputs/Inputs.tsx';
// @ts-ignore
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails.tsx';
// @ts-ignore
import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation.tsx';
// @ts-ignore
import TopButtons from './Components/TopButtons/TopButtons.tsx';
// @ts-ignore
// import UilReact from '@iconscout/react-unicons/icons/uil-react';

function App() {
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
}

export default App;
