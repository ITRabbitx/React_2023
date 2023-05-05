import axios from 'axios';

export async function getWeatherData(city) {
    try {
        const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid=983f4fb115cea3acadcb65d989ab9ea5')
        return response.data;
    } catch(error) {
        console.error(error);   
        return null;
    }   
}

export default getWeatherData;

