import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function temp() {
    let temperature = Math.round(props.data.temp.day);
    return temperature;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="big">
      <div> {day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div> {temp()} °C </div>
    </div>
  );
}
