import './SearchBar.css';

function SearchBar({ onSubmit }) {

    const handleClick = () => {
        console.log("Button was clicked");
        onSubmit('Zurich'); //temporarily hardcoded
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
    }    

    return (
    <div className='search-bar'>
        <form onSubmit={handleSubmit}>
            <label>Enter your City: </label>
            <input />
            <button type="button" onClick={handleClick}>Get your Weather</button>
        </form>
    </div>
    );
}

export default SearchBar;