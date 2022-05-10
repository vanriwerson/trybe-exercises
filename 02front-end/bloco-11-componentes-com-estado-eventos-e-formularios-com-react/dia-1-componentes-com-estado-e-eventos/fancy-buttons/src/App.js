import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.hello = this.hello.bind(this)
    this.conversation = this.conversation.bind(this)
    this.goodbye = this.goodbye.bind(this)
  }
  
  hello() {
    console.log(this);
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
