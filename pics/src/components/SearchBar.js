function SearchBar({ onSubmit }) {
    const handleClick = () => {
        onSubmit('cars') //temporarily hard coded
    };

    return (
    <div>
        <input />
        <button onClick={handleClick}> Click me </button>
    </div>
    );
}

export default SearchBar;