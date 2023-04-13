import SearchBar from './components/SearchBar';

function App(){

    const handleSubmit = () => {
        console.log("Submitted");
    }    
 
    return (

        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>

    )        
}


export default App;