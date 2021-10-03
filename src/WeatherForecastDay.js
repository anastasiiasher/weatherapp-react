import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function temp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature} °`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div> {day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div> {temp()} </div>
    </div>
  );
}
