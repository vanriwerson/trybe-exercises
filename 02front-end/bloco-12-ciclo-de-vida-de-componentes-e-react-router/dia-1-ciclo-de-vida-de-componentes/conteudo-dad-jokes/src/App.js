import React, { Component } from 'react';
import './App.css';
import DadJoke from './components/DadJokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DadJoke />
      </div>
    );
  }
}

export default App;
