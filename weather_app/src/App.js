import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import term from './components/SearchBar';
import { useState } from 'react';

function App() {
    const [city, setCity] = useState('');

    const handleSubmit = (city) => {
        const result = WeatherDisplay(city);
        setCity(result);
        console.log("result: ", result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <WeatherDisplay city={city} />
        </div>
    )
}



export default App;