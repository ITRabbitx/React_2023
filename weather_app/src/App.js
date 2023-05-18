import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import term from './components/SearchBar';
import { useState } from 'react';
import getCountryCode from './api';
import getWeatherData from './api';

function App() {
    const [city, setCity] = useState('');

    const handleSubmit = async(city, event) => {
        const result = WeatherDisplay(city);
        setCity(result);
        console.log("result: ", result);

        event.preventDefault();
        console.log("Submitted");
        const countryCode = await getCountryCode(term);
        getWeatherData(term, countryCode);
        };
    

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <WeatherDisplay city={city} />
        </div>
    )
}



export default App;