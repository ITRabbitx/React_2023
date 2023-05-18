import axios from 'axios';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const getWeatherData = async (city, countryCode) =>  {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}

export default getWeatherData;