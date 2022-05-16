import React, { Component } from 'react';
import './App.css';
import RequiredTextarea from './components/RequiredTextarea';
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
    tipo: '',
    curriculo: '',
    cargo: '',
    descricao: '',
  }

  handleChange = ({ target }) => {
    const { name, value, checked } = target;
    const valueType = target.type === 'checkbox' ? checked : value;
    const setValue = () => (name === 'nome' ? valueType.toUpperCase() : valueType);
    this.setState({ [name]: setValue() })
  }

  handleError = () => {
    const currentState = Object.values(this.state);
    return currentState.every((value) => value !== '');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, curriculo, cargo, descricao } = this.state;

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

          <label>
            Tipo:
            <input
              type="radio"
              name="tipo"
              value="Casa"
              onChange={(e) => this.handleChange(e)}
            />Casa
            <input
              type="radio"
              name="tipo"
              value="Apartamento"
              onChange={(e) => this.handleChange(e)}
            />Apartamento
          </label>
        </fieldset>
        <fieldset>
          <legend>Último Emprego</legend>
          <RequiredTextarea
            labelText="Resumo do currículo"
            name="curriculo"
            maxLength={1000}
            onChange={(e) => this.handleChange(e)}
            value={curriculo}
          />

          <RequiredTextarea
            labelText="Cargo"
            name="cargo"
            maxLength={40}
            onChange={(e) => this.handleChange(e)}
            value={cargo}
          />

          <RequiredTextInput
            labelText="Descrição do cargo"
            name="descricao"
            maxLength={500}
            onChange={(e) => this.handleChange(e)}
            value={descricao}
          />
        </fieldset>
      </form>
    );
  }
}

export default App;
