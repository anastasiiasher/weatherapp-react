import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setData]  = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity); 
  function handleResponse(response) {
      console.log(response.data);
      setData({
        ready: true,
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
  const apiKey = "72a6f5c8d3593367d6b1bec5268294b4";
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
    </div>
  );
} else {
    search();
    return "Loading";
}
}
