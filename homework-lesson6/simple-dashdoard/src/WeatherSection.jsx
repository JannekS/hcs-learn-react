import { useState, useEffect } from "react";

function WeatherSection() {
  const [weatherData, setWeatherData] = useState();
  async function fetchWeaterData() {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=53.55&longitude=9.99&hourly=temperature_2m,rain,showers,snowfall,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,showers_sum&forecast_days=1&timezone=Europe%2FBerlin"
    );
    const apiData = await res.json();
    setWeatherData(apiData);
    console.log(apiData);
    console.log(weatherData);
  }

  useEffect(() => {
    fetchWeaterData();
  }, []);

  return (
    <section className="flex flex-col items-start justify-center space-y-4 h-1/2 w-full p-4 bg-sky-300 rounded-md shadow-md">
      <h2 className="text-md font-bold">Current Weather</h2>
      <div className="flex flex-row space-x-2 items-center justify-center">
        <label htmlFor="locationSelect" className="tex-sm">
          Select your location
        </label>
        <select
          name="locationSelect"
          id="locationSelect"
          className="p-2 text-sm bg-sky-50 rounded-md"
        >
          <option value="berlin">Berlin</option>
          <option value="hamburg">Hamburg</option>
          <option value="muenchen">München</option>
        </select>
        <button className="p-2 bg-blue-500 text-slate-800 text-xs rounded-md shadow-indigo-100 hover:bg-blue-700 hover:text-blue-50 active:shadow-sm active:bg-blue-600 duration-150">
          Update Weather
        </button>
      </div>
      {weatherData ? (
        <div className="flex flex-col space-y-4 items-center justify-center w-44 p-4 rounded-md bg-sky-50">
          <p>{weatherData.hourly.temperature_2m[0]} °C</p>
          <p>Cloud Cover: {weatherData.hourly.cloudcover[0]} %</p>
          <p>Rain: {weatherData.hourly.rain[0]} mm</p>
        </div>
      ) : (
        <p>One moment please...</p>
      )}
    </section>
  );
}

export default WeatherSection;
