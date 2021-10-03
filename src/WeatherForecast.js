import axios from "axios";
import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import { useState } from "react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState(null);  
  
  function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
  }
  function load() {
      let apiKey = "5d9b0eab6faafb355e85c9888b168f5f";
      let lat = props.coords.lat;
      let lon = props.coords.lon;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      
      axios.get(apiUrl).then(handleResponse);
    }
    if (loaded) {
      return (
      <div className="WeatherForecast">
          <div className="row">
              <div className="col">
                  <WeatherForecastDay data={forecast[0]}/>
                  </div>
                  </div>
                  </div>
                  );
                }
                else
                { load();
                    return null;
                }
            }
