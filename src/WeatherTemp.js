import React from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  return (
    <div>
      <span className="temperature"> {Math.round(props.celsius)} </span>
      <span className="unit">
        {" "}
        °C     
      </span>
    </div>
  );
}
