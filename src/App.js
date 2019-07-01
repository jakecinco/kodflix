import React from 'react';
import residentEvil from './Resident-Evil-1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix!</h1>
        <img src={residentEvil} className="App-logo" alt="Resident Evil 1 movie" />
      <div className='container'>
        <div className='item'>
          Movie 1
        </div>
        <div className='item'>
          Movie 2
        </div>
        <div className='item'>
          Movie 3
        </div>
      </div>

      <div className='container'>
        <div className='item'>
          Movie 4
        </div>
        <div className='item'>
          Movie 5
        </div>
        <div className='item'>
          Movie 6
        </div>
      </div>

    </div>
  );
}

export default App;
