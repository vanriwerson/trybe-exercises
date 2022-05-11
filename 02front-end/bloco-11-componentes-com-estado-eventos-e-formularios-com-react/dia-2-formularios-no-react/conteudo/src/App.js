import React, { Component } from 'react';
import './App.css'
import Checkbox from './components/Checkbox';
import Select from './components/Select';

class App extends Component{
  state = {
    modo: 'Aos poucos',
    entendeu: false,
    nota: 10,
    observacoes: '',
  }
  
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Componentes com Estado, Eventos e Formulários com React</h1>
        <form>
          <Select
            value={this.state.modo}
            change={(e) => this.handleChange(e)}
          />
          <Checkbox
            value={this.state.entendeu}
            change={(e) => this.handleChange(e)}
          />
  
          <label>
            Que nota esse form merece?
            <input
              name="nota"
              type="number"
              value={this.state.nota}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
  
          <label>
            Justifique sua nota:
            <textarea
              name="observacoes"
              value={this.state.observacoes}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <p>
            O componente 'input:file' não é controlado pelo React:
            <input type="file"></input> 
          </p>
        </form>
      </div>
    );
  }
}

export default App;
