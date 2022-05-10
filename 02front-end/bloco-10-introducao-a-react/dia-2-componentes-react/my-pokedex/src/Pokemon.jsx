import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Pokemon.css'

export class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props; // cria uma chave para as propriedades de Pokemon
    const { value, measurementUnit } = averageWeight;

    return(
      <div className="pokemon-card">
        <h2 className="pokemon-name">{name}</h2>
        <img src={image} alt={name} className='pokemon-img'/>
        <div className="pokemon-info">
          <p>Type: {type}</p>
          <p>Weight: {`${value} ${measurementUnit}`}</p>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({ // shape() elimina a necessidade de repetir o isRequired
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};
