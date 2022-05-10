import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      helloClicks: 0,
      conversationClicks: 0,
      goodbyeClicks: 0
    }
    
    this.hello = this.hello.bind(this)
    this.conversation = this.conversation.bind(this)
    this.goodbye = this.goodbye.bind(this)
  }
  
  hello = () => {
    console.log('Hello!');
    this.setState((previousState, _props) => ({
      helloClicks: previousState.helloClicks + 1
    }));
  }

  conversation() {
    console.log("How're doing?");
    this.setState((previousState, _props) => ({
      conversationClicks: previousState.conversationClicks + 1
    }));
  }

  goodbye() {
    console.log('Goodbye!');
    this.setState((previousState, _props) => ({
      goodbyeClicks: previousState.goodbyeClicks + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.hello}>{this.state.helloClicks}</button>
        <button onClick={this.conversation}>{this.state.conversationClicks}</button>
        <button onClick={this.goodbye}>{this.state.goodbyeClicks}</button>
      </div>
    );
  }
}

export default App;
