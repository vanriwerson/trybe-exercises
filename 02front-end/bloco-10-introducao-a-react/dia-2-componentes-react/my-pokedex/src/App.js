import { Pokedex } from "./Pokedex";
import pokemons from "./data";

function App() {
  return (
    <div>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
