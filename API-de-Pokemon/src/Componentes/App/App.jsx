import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  
  const obtenerPokemons = async () => {
    const URL ='https://pokeapi.co/api/v2/pokemon?limit=807';
    const respuesta = await fetch(URL);
    if (respuesta.ok) {
      const datos = await respuesta.json();
      const nombresPokemon = datos.results.map(p => p.name);
      setPokemon(nombresPokemon);
    } else {
      console.error('La respuesta de la red no fue correcta');
    }
  }

  return (
    <>
    <h1>API de Pokemons</h1>
    <div className="App">
      <button onClick={obtenerPokemons}>Obtener Pokemon</button>
      <ol>
          {pokemon.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ol>
    </div>
    </>
    
  );
}



export default App
