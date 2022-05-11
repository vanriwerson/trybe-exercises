import React, { Component } from 'react';
import './App.css'

class App extends Component{
  state = {
    cor: 'Vermelho',
    entendeu: false,
    nota: 10,
    observacoes: '',
  }
  
  render() {
    return (
      <div className="App">
        <h1>Componentes com Estado, Eventos e Formulários com React</h1>
        <form>
          <select>
            <option>Amarelo</option>
            <option>Azul</option>
            <option selected>Vermelho</option>
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
