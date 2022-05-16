import React, { Component } from "react";

class Checkbox extends Component{
  render() {
    const { change, value } = this.props;
    return(
      <label>
        <input
          name="entendeu"
          type="checkbox"
          value={ value }
          onChange={ change }
        ></input>
        Entendeu a matéria de hoje?
      </label>
    );
  }
}

export default Checkbox;
