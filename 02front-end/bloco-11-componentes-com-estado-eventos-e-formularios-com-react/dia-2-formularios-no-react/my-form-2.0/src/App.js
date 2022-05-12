import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    estado:'SP'
  }
  
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ estado: value })
  }
  render() {
    return(
      <form className="form">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label htmlFor="nome">
            Nome: <input type="text" name="nome" maxLength={40} required={true} ></input>
          </label>

          <label htmlFor="email">
            E-mail: <input type="text" name="email" maxLength={50} required={true} ></input>
          </label>
          
          <label htmlFor="cpf">
            CPF: <input type="text" name="cpf" maxLength={11} required={true} ></input>
          </label>

          <label htmlFor="endereco">
            Endereço: <input type="text" name="endereco" maxLength={200} required={true} ></input>
          </label>

          <label htmlFor="cidade">
            Cidade: <input type="text" name="cidade" maxLength={28} required={true} ></input>
          </label>

          {/* select com os estados brasileiros: https://gist.github.com/quagliato/9282728 */}
          <label htmlFor="estado">
            Estado:
            <select
              id="estado"
              name="estado"
              onChange={this.handleChange}
              value={this.state.estado}
              required={true}
            >
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
