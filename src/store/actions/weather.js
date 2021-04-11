import axios from 'axios'
import { APP_ID } from '../../constants'

export const fetchWeather = (city = '') => {
  return async (dispatch) => {
    try {
      const request = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APP_ID}`);
      const weather = request.data.list[0].weather[0].main
      const normalizedWeather = request.data.list
        .filter((_, i) => i <= 6 )
        .map(elem => {
          const hoursAndMinutes = elem.dt_txt.substring(11, 16);

          return {
            time: hoursAndMinutes,
            temperature: Number((elem.main.temp - 273.15).toFixed()),
          }
        })

        dispatch(fetchWeatherSuccess({weather: normalizedWeather, weatherType: weather}))
    } catch (err) {
      dispatch(fetchWeatherError(`City with name ${city} does not exist!`))
    }
  };
};

export const fetchWeatherSuccess = (payload) => ({
  type: 'FETCH_WEATHER_SUCCESS',
  payload,
});

export const fetchWeatherError = (payload) => ({
  type: 'FETCH_WEATHER_ERROR',
  payload,
});
