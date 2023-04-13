import './SearchBar.css';

function SearchBar({ onSubmit }) {

    const handleClick = () => {
        console.log("Button was clicked");
        onSubmit('Zurich'); //temporarily hardcoded
    }

    return (
    <div className='search-bar'>
        <form onSubmit={console.log("test")}>
            <label>Enter your City: </label>
            <input />
            <button onClick={handleClick}>Get your Weather</button>
        </form>
    </div>
    );
}

export default SearchBar;