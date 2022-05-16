import React, { Component } from 'react';
import './App.css'
import Checkbox from './components/Checkbox';
import Select from './components/Select';

class App extends Component{
  state = {
    modo: '',
    entendeu: false,
    nota: '',
    observacoes: '',
    formularioComErros: true,
  }
  
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    
    this.handleError();
  }

  handleError = () => {
    const { modo, entendeu, nota } = this.state;
    
    const errorCases = [
      !modo,
      !entendeu,
      !nota,
    ];

    const fulfilledForm = errorCases.every((error) => error !== true);

    this.setState({ formularioComErros: !fulfilledForm });
  }

  render() {
    const { modo, entendeu, nota, observacoes, formularioComErros } = this.state;
    return (
      <div className="App">
        <h1>Componentes com Estado, Eventos e Formulários com React</h1>
        <form>
          <Select
            value={modo}
            change={(e) => this.handleChange(e)}
          />
          <Checkbox
            value={entendeu}
            change={(e) => this.handleChange(e)}
          />
  
          <label>
            Que nota esse form merece?
            <input
              name="nota"
              type="number"
              value={nota}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
  
          <label>
            Justifique sua nota:
            <textarea
              name="observacoes"
              value={observacoes}
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <p>
            O componente 'input:file' não é controlado pelo React:
            <input type="file"></input> 
          </p>
        </form>
        { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default App;
