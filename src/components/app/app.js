import React from "react";
import { Chart } from "../chart";
import { Form } from '../form';
import { useSelector } from 'react-redux';

import clear from "./assets/sunny.png";
import cloud from "./assets/cloud.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";

export const App = () => {
  const weatherData = useSelector(state => state.weather);

  const currentWeather = {
    "Clouds": <img className="weather-icons" src={cloud} alt="cloud" />,
    "Rain": <img className="weather-icons" src={rain} alt="rain" />,
    "Clear": <img className="weather-icons" src={clear} alt="clear" />,
    "Snow": <img className="weather-icons" src={snow} alt="snow" />
  }

  console.log(weatherData, 'weather')

  return (
    <div className='app'>
      <Form />

      {weatherData && weatherData.error && (
        <p className="error" >Unknown city, enter correct</p>
      )}

      {weatherData && weatherData.weather.length === 0 && !weatherData.error && (
        <>
          <div className="wrapper" >
            <img src={clear} alt="clear" />
            <img src={cloud} alt="cloud" />
            <img src={rain} alt="rain" />
            <img src={snow} alt="snow" />
          </div>
          <h1 className="h1" >find out the weather</h1>
        </>
      )}

      {weatherData && weatherData.weather.length > 0 && !weatherData.error && (
        <>
        <Chart/>
        {currentWeather[weatherData.weatherType]}
        </>
      )}
    </div>
  );
}
