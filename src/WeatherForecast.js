import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thursday </div>
          <WeatherIcon code="01d" size={36} />
          <div>12 C</div>
        </div>
      </div>
    </div>
  );
}
