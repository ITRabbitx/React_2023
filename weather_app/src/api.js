import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const getCoordinates = async (city) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return { lat, lon };
    }
    throw new Error("No coordinates found for the given city.");
  } catch (error) {
    console.error("Error fetching coordinates: ", error);
    throw error;
  }
};

const getWeatherData = async (city) => {
  try {
    const { lat, lon } = await getCoordinates(city);
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
};

export { getCoordinates, getWeatherData };
