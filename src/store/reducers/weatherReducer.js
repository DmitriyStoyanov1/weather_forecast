const initialState = {
  weather: [],
  weatherType: '',
  error: ''
}

export const weather = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_WEATHER_SUCCESS':
      return {
        error: '',
        weather: action.payload.weather,
        weatherType: action.payload.weatherType
      }
    case 'FETCH_WEATHER_ERROR':
      return {
        error: action.payload,
        weather: [],
        weatherType: ''
      }
    default:
      return state
  }
}
