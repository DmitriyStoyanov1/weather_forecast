import { createSelector } from 'reselect';

export const selectWeather = createSelector(
  (state) => state.weather.weather,
  weather => weather
);
