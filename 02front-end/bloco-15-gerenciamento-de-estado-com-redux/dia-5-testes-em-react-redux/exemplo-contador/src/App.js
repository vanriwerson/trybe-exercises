import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}

export default App;
