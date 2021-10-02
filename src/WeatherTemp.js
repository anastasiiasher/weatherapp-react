import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function c2F(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function f2C(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature"> {Math.round(props.celsius)} </span>
        <span className="unit">
          {" "}
          °C /
          <a href="/" onClick={c2F}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature"> {Math.round(farenheit)} </span>
        <span className="unit">
          {" "}
          °F /
          <a href="/" onClick={f2C}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
