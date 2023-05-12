import axios from 'axios';
import term from './components/SearchBar';

const getWeatherData = async () =>  {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=YOUR_KEY`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}

export default getWeatherData;

