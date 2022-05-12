import React, { Component } from 'react'

class RequiredTextInput extends Component {
  render () {
    const { labelText, name, maxLength, onChange, value } = this.props

    return (
      <label>
        {labelText}:{' '}
        <input
          type='text'
          name={ name }
          maxLength={ maxLength }
          onChange={ onChange }
          value={ value }
          required
        />
      </label>
    )
  }
}

export default RequiredTextInput
