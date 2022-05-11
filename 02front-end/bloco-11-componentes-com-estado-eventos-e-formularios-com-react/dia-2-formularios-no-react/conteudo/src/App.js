import React, { Component } from 'react';
import './App.css'

class App extends Component{
  state = {
    modo: 'React',
    entendeu: false,
    nota: 10,
    observacoes: '',
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      name: value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Componentes com Estado, Eventos e Formulários com React</h1>
        <form>
          <select name="modo" onChange={(e) => this.handleChange(e)}>
            <option>Aos poucos</option>
            <option>aprendo</option>
            <option>React</option>
          </select>
  
          <label>
            <input name="entendeu" type="checkbox"></input>
            Entendeu a matéria de hoje?
          </label>
  
          <label>
            Que nota esse form merece?
            <input name="nota" type="number"></input>
          </label>
  
          <label>
            Justifique sua nota:
            <textarea name="observacoes" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
