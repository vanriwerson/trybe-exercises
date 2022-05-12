import React, { Component } from 'react';
import './App.css';
import RequiredTextInput from './components/RequiredTextInput';
import SelectState from './components/SelectState';

class App extends Component{
  state = {
    nome:'',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado:'',
  }
  
  handleChange = ({ target }) => {
    const { name, value, checked } = target;
    const valueType = target.type === 'checkbox' ? checked : value;
    const setValue = () => (name === 'nome' ? valueType.toUpperCase() : valueType);
    this.setState({ [name]: setValue() })
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;

    return(
      <form className="form">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <RequiredTextInput
            labelText="Nome"
            name="nome"
            maxLength={40}
            onChange={(e) => this.handleChange(e)}
            value={nome}
          />

          <RequiredTextInput
            labelText="E-mail"
            name="email"
            maxLength={50}
            onChange={(e) => this.handleChange(e)}
            value={email}
          />
          
          <RequiredTextInput
            labelText="CPF"
            name="cpf"
            maxLength={11}
            onChange={(e) => this.handleChange(e)}
            value={cpf}
          />

          <RequiredTextInput
            labelText="Endereço"
            name="endereco"
            maxLength={200}
            onChange={(e) => this.handleChange(e)}
            value={endereco}
          />

          <RequiredTextInput
            labelText="Cidade"
            name="cidade"
            maxLength={28}
            onChange={(e) => this.handleChange(e)}
            value={cidade}
          />

          <SelectState
            onChange={(e) => this.handleChange(e)}
            value={estado}
          />
        </fieldset>
        <fieldset>
          <legend>Último Emprego</legend>
          
        </fieldset>
      </form>
    );
  }
}

export default App;
