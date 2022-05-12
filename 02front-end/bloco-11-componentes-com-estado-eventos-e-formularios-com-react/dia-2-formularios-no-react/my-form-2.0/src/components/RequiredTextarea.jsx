import React, { Component } from 'react';
import PropTypes from "prop-types";

class RequiredTextarea extends Component{
  render() {
    const { labelText, name, maxLength, onChange, value } = this.props;
    
    return(
      <label>
        { labelText }:{' '}
        <textarea
          name={ name }
          maxLength={ maxLength }
          onChange={ onChange }
          value={ value }
          required
        />
      </label>
    );
  }
}

RequiredTextarea.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default RequiredTextarea;
