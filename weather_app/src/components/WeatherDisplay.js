
function SearchBar({ onSubmit }) {

    const handleClick = () => {
        console.log("Button was clicked");
    }

    return (
    <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Enter your City</label>
            <input />
            <button onClick={handleClick}>Get your Weather</button>
        </form>
    </div>
    );
}

export default SearchBar;

