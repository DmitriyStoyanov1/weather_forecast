import React from "react";
import { Chart } from "../chart";
import { Form } from '../form';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../store/selectors';

import clear from "./assets/sunny.png";
import cloud from "./assets/cloud.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";

const size = {
  width: "100%",
  height: "300px",
  position: "relative"
}

const h1 = {
  margin: "0",
  position: "relative",
  top: "9%",
  textAlign: "center",
  fontSize: "71px",
  fontFamily: 'Roboto',
  color: "darkslategray",
  opacity: "0.4"
}

const wrapper = {
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "4%"
}

const img = {
  position: "absolute",
  top: "20%",
  right: "43%",
  opacity: "0.7",
  zIndex: "0"
}

export const App = () => {
  const weatherData = useSelector(state => state.weather);

  const currentWeather = {
    "Clouds": <img style={img} src={cloud} alt="cloud" />,
    "Rain": <img style={img} src={rain} alt="rain" />,
    "Clear": <img style={img} src={clear} alt="clear" />,
    "Snow": <img style={img} src={snow} alt="snow" />
  }

  console.log(weatherData, 'weather')

  return (
    <div className='app'>
      <Form />

      {weatherData && weatherData.error && (
        <p>There is no weather data</p>
      )}

      {weatherData && weatherData.weather.length === 0 && !weatherData.error && (
        <>
          <div style={wrapper}>
            <img src={clear} alt="clear" />
            <img src={cloud} alt="cloud" />
            <img src={rain} alt="rain" />
            <img src={snow} alt="snow" />
          </div>
          <h1 style={h1}>find out the weather</h1>
        </>
      )}

      {weatherData && weatherData.weather.length > 0 && !weatherData.error && (
        <>
        <Chart/>
        {currentWeather[weatherData.weatherType]}
        </>
      )}

      {/* <div style={size}>
        {state !== null ? 
        <>
          
          {state && currentWeather[state.current_weather]}
        </> : 
        (
        <>
          <div style={wrapper}>
            <img src={clear} alt="clear" />
            <img src={cloud} alt="cloud" />
            <img src={rain} alt="rain" />
            <img src={snow} alt="snow" />
          </div>
          <h1 style={h1}>find out the weather</h1>
        </>
        )}
      </div> */}
    </div>
  );
}
