import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setData]  = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity); 
  function handleResponse(response) {
      console.log(response.data);
      setData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        city: response.data.name,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: new Date(response.data.dt * 1000),
      });
    }
function handleSubmit(event) {
  event.preventDefault();
  search();
}
function search() {
  const apiKey = "5d9b0eab6faafb355e85c9888b168f5f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
function handleCityChange(event) {
  setCity(event.target.value);
}
if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
} else {
    search();
    return "Loading";
}
}
