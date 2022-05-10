import React from 'react';
import './App.css';

class App extends React.Component {
  hello() {
    console.log('Hello!');
  }

  conversation() {
    console.log("How're doing?");
  }

  goodbye() {
    console.log('Goodbye!');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.hello}>Log1</button>
        <button onClick={this.conversation}>Log2</button>
        <button onClick={this.goodbye}>Log3</button>
      </div>
    );
  }
}

export default App;
