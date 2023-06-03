import { useState, useEffect } from "react";

function WeatherSection() {
  const locations = {
    berlin: { lat: 52.52, lon: 13.41 },
    hamburg: { lat: 53.55, lon: 9.99 },
    muenchen: { lat: 48.7, lon: 13.46 },
  };
  const [weatherData, setWeatherData] = useState();
  const [weatherCodes, setWeatherCodes] = useState();
  const [coordinates, setCoordinates] = useState(locations.berlin);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setCurrentHour();
    fetchWeaterData(coordinates);
  }, [hour, coordinates]);
  useEffect(() => {
    fetchWeatherCodes();
  }, []);

  async function fetchWeaterData(coordinates) {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&hourly=temperature_2m,rain,showers,snowfall,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,showers_sum&current_weather=true&forecast_days=1&timezone=Europe%2FBerlin`
    );
    const apiData = await res.json();
    setWeatherData(apiData);
    // console.log(apiData);
  }

  async function fetchWeatherCodes() {
    const res = await fetch("/weatherCodes.json");
    const weatherCodeData = await res.json();
    setWeatherCodes(weatherCodeData);
    console.log(weatherCodeData[0][3].day.description);
    console.log(weatherCodeData);
  }

  function setCurrentHour() {
    const now = new Date();
    setHour(now.getHours());
    // console.log(hour);
  }

  function handleSelectChange(event) {
    setCoordinates(locations[event.target.value]);
  }

  return (
    <section className="flex flex-col items-start justify-center space-y-4 h-1/2 w-full p-4 bg-sky-300 rounded-md shadow-md">
      <h2 className="text-md font-bold">Current Weather</h2>
      <div className="flex flex-row space-x-2 items-center justify-end w-full">
        <label htmlFor="locationSelect" className="tex-sm">
          Select your location
        </label>
        <select
          name="locationSelect"
          id="locationSelect"
          className="p-2 text-sm bg-sky-50 rounded-md"
          onChange={handleSelectChange}
        >
          <option value="berlin">Berlin</option>
          <option value="hamburg">Hamburg</option>
          <option value="muenchen">München</option>
        </select>
        <button
          className="p-2 bg-blue-500 text-slate-800 text-xs rounded-md shadow-indigo-100 hover:bg-blue-700 hover:text-blue-50 active:shadow-sm active:bg-blue-600 duration-150"
          onClick={setCurrentHour}
        >
          Update Weather
        </button>
      </div>
      {weatherData && weatherCodes ? (
        <div className="flex flex-row justify-around w-full p-4 rounded-md bg-sky-50">
          <div className="flex flex-col space-y-2">
            <p>
              {
                weatherCodes[0][weatherData.current_weather.weathercode].day
                  .description
              }
              {", "}
              {weatherData.current_weather.temperature} °C
            </p>
            <div className="w-20 h-20 mx-auto rounded-lg bg-blue-300">
              <img
                src={
                  weatherCodes[0][weatherData.current_weather.weathercode].day
                    .image
                }
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p>min: {weatherData.daily.temperare_2m_min} °C</p>
            <p>max: {weatherData.daily.temperature_2m_max} °C</p>
            <p>rain: {weatherData.daily.rain_sum[0]} mm</p>
          </div>
        </div>
      ) : (
        <p>One moment please...</p>
      )}
    </section>
  );
}

export default WeatherSection;
