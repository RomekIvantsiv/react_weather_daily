import { State } from '../react-app-env.d';

export const getWeatherSelector = (state: State) => state.weather;
export const getQuerySelector = (state: State) => state.query;
export const getUnitsSelector = (state: State) => state.units;
export const getHeaderCities = (state: State) => state.cities;
