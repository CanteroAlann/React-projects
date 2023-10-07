
import './styles/App.css';
import Hero from './Hero';
import Pokemon from './Pokemon';
import React, { useState } from 'react';
import History from './History';

function App() {

  const [pokemonName, setPokemonName] = useState("pikachu");




  return (
    <div className="App">
      <header className="App-header">

        <p>
          Pokedex
        </p>
        <Hero setPokemonName={setPokemonName} pokemonName={pokemonName} />
        <Pokemon nameOrId={pokemonName} />
        <History />

      </header>
    </div>
  );
}

export default App;
