/* eslint-disable no-param-reassign */
import {
  createAction,
  configureStore,
  createReducer,
} from '@reduxjs/toolkit';
import { searchParamsType, State, WeatherState } from '../react-app-env.d';

export const initialState: State = {
  weather: null,
  query: { q: 'warsaw' },
  units: 'metric',
  cities: [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Warsaw',
    },
    {
      id: 3,
      title: 'Kyiv',
    },
    {
      id: 4,
      title: 'Tokyo',
    },
    {
      id: 5,
      title: 'Toronto',
    },
  ],
};

enum ActionType {
  SET_WEATHER = 'SET_WEAHTER',
  SET_QUERY = 'SET_QUERY',
  SET_UNITS = 'SET_UNITS',
}

export const setWeather = createAction<WeatherState>(ActionType.SET_WEATHER);
export const setQuery = createAction<searchParamsType>(ActionType.SET_QUERY);
export const setUnits = createAction<string>(ActionType.SET_UNITS);

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setWeather, (state, action) => {
    state.weather = action.payload;
  });

  builder.addCase(setQuery, (state, action) => {
    state.query = action.payload;
  });

  builder.addCase(setUnits, (state, action) => {
    state.units = action.payload;
  });
});

export const store = configureStore({ reducer });
