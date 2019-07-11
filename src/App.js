import React, { Component } from 'react';
import Gallery from './Gallery.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Kodflix!</h1>
        <Gallery />
      </div>
    );
  }
}

export default App;
