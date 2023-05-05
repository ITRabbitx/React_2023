import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { useState } from 'react';

function App() {
    const [city, setCity] = useState([]);

    const handleSubmit = async (term) => {
        const result = await WeatherDisplay(term);
        setCity(result);
        console.log("Submitted");
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <WeatherDisplay city={city} />
        </div>
    )
}



export default App;