import React, { Component } from 'react';

class Select extends Component {
  render () {
    const { change, value } = this.props
    return (
      <select name="modo" onChange={change} value={value}>
        <option></option>
        <option>Aos poucos</option>
        <option>aprendo</option>
        <option>React</option>
      </select>
    )
  }
}

export default Select
