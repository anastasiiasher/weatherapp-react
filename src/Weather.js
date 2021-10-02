import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setData]  = useState({ready:false});
  
  function handleResponse(response) {
      console.log(response.data);
      setData({
        ready:true,
        temperature: response.data.main.temp,
        city: response.data.name,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        date: "Wednesday 07:00"
      });
    }

if (weatherData.ready) {
return (
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city"
            className="form-control"
            autoFocus="on"
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
    <h1> {weatherData.city}</h1>
    <ul>
      <li> {weatherData.date}</li>
      <li className="text-capitalize"> {weatherData.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <img
         src={weatherData.iconUrl}
         alt={weatherData.description}
        />
        <span className="temperature"> {Math.round(weatherData.temperature)} </span>
        <span className="unit"> °C </span>
      </div>
      <div className="col-6">
        <ul>
          <li> Humidity: {weatherData.humidity} %</li>
          <li> Wind: {Math.round(weatherData.wind)} km/h</li>
        </ul>
      </div>
    </div>
  </div>
);
} else {
    const apiKey = "72a6f5c8d3593367d6b1bec5268294b4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";   
}
}
