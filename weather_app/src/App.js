import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { getWeatherData } from './api';

function App() {
  const [weatherData, setWeatherData] = useState(null); // State to store weather data

  const handleSubmit = async (city) => {
    console.log("Submitted");

    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
