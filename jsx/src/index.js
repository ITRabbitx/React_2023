// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root')

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

function App() {
    const name = 'Eva';
  
    return (
      <div>
        My name is:
        <h1>{name}</h1>
      </div>
    );
  }
// 5) Show the component on the screen
export default App;
root.render(<App/>);
