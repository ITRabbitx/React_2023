import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    onSubmit(term); // Call the onSubmit function passed as prop with the search term
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <label>Enter your City: </label>
        <input value={term} onChange={handleChange} />
        <button type="submit">Search</button> {/* Added a search button */}
      </form>
    </div>
  );
}

export default SearchBar;
