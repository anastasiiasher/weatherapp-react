import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState(null);  

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
  }
  function load() {
      let apiKey = "5d9b0eab6faafb355e85c9888b168f5f";
      let lat = props.coordinates.lat;
      let lon = props.coordinates.lon;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      
      axios.get(apiUrl).then(handleResponse);
    }
    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
              {forecast.map(function(dailyForecast,index) {
                  if (index > 0 && index < 7) {
                    return (
                      <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                      </div>
                    );
                  } else {
                    return null;
                  }
              })}  
          </div>
        </div>
      );
    } else {
        load();
        return null;
    }
}