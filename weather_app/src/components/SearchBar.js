import getWeatherData from '../api';
import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
        getWeatherData(term);
    }    

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
    <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <label>Enter your City: </label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
    );
}

export default SearchBar;