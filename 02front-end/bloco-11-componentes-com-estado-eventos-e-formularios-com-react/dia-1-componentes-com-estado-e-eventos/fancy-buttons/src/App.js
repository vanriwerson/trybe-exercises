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
  
  hello() {
    this.setState((previousState, _props) => ({
      helloClicks: previousState.helloClicks + 1
    }), () => {
      console.log(this.setButtonColor(this.state.helloClicks));
    });
  }

  conversation() {
    this.setState((previousState, _props) => ({
      conversationClicks: previousState.conversationClicks + 1
    }), () => {
      console.log(this.setButtonColor(this.state.conversationClicks));
    });
  }

  goodbye() {
    this.setState((previousState, _props) => ({
      goodbyeClicks: previousState.goodbyeClicks + 1
    }), () => {
      console.log(this.setButtonColor(this.state.goodbyeClicks));
    });
  }

  setButtonColor(number) {
    return number % 2 === 0 ? 'green' : 'blue';
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={this.hello}
          style={{ backgroundColor: this.setButtonColor(this.state.helloClicks) }}
        >{this.state.helloClicks}</button>
        <button
          onClick={this.conversation}
          style={{ backgroundColor: this.setButtonColor(this.state.conversationClicks) }}
        >{this.state.conversationClicks}</button>
        <button
          onClick={this.goodbye}
          style={{ backgroundColor: this.setButtonColor(this.state.goodbyeClicks) }}
        >{this.state.goodbyeClicks}</button>
      </div>
    );
  }
}

export default App;
