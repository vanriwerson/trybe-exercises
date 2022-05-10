import React, { Component } from 'react'
import { Pokemon } from './Pokemon'
import './Pokedex.css'

export class Pokedex extends Component {
  render () {
    const { pokemons } = this.props
    return (
      <main className='pokedex-container'>
        <h1>Pokédex</h1>
        <div className='pokedex-list'>
          {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </main>
    )
  }
}
