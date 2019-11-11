import React from 'react';
import './App.css';
import Home from './Components/Home';


// The App here contains only the Home Component, and does not require a state as data is stored in the Home Component itself.
function App() {
  return (
    <div className="App">
      <Home/>      
    </div>
  );
}

export default App;
