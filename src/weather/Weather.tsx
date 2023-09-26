// System
import React, { useEffect, useMemo, useState } from 'react';

// My Imports
import { IForecast, getWeather, DefaultForecast } from './Forecast';

interface IWeatherState {
  weatherRetrievalStatus: WeatherRetrievalStatus;
  forecast: IForecast;
  lat: number;
  lng: number;
}

enum WeatherRetrievalStatus {
  SUCCESS, FAILED, PENDING
}

export default function Weather() {
  const [weatherState, setWeatherState] = useState<IWeatherState>({
    weatherRetrievalStatus: WeatherRetrievalStatus.PENDING,
    forecast: DefaultForecast,
    lat: 38.89511,
    lng: -77.03637
  })

  useEffect(() => {
    setWeatherState({
      ...weatherState,
      weatherRetrievalStatus: WeatherRetrievalStatus.PENDING
    })

    getWeather(weatherState.lat, weatherState.lng)
      .then(data => {
        data.num_entries = data.hourly.time.length;
        setWeatherState({
          ...weatherState,
          weatherRetrievalStatus: WeatherRetrievalStatus.SUCCESS,
          forecast: data
        })
      }).catch(err => {
        console.log(err);
        setWeatherState({
          ...weatherState,
          weatherRetrievalStatus: WeatherRetrievalStatus.FAILED
        })
      })
  }, [])

  const { hourly } = weatherState.forecast;
  return (
    <div id="weather">
      <p>
        {hourly.apparent_temperature[0]}° F
        <img src={`weather_icons/${hourly.weathercode}.png`} />
        in Washington, D.C.
      </p>
    </div>
  )
}