import axios from 'axios';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


const getCountryCode = async (term) =>  {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${apiKey}`);
        return response.data[0].country;
    } catch (error) {
        console.error("Error fetching country code: ", error);
    }
}

export default getCountryCode;


