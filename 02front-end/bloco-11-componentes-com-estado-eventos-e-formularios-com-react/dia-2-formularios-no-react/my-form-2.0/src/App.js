import React, { Component } from 'react';
import './App.css';
import RequiredTextInput from './components/RequiredTextInput';

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

          {/* select com os estados brasileiros: https://gist.github.com/quagliato/9282728 */}
          <label htmlFor="estado">
            Estado:
            <select
              name="estado"
              onChange={(e) => this.handleChange(e)}
              value={this.state.estado}
              required={true}
            >
              <option value="">Selecione</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Último Emprego</legend>
          
        </fieldset>
      </form>
    );
  }
}

export default App;
