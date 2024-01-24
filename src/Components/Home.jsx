// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file
import pokeballImage from './POKEBALL.png'; // Update the path to your pokeball image

const Home = () => {
  const [pokemonOfTheDay, setPokemonOfTheDay] = useState(null);

  useEffect(() => {
    // Fetch a random Pokemon on component mount
    getRandomPokemon();
  }, []);

  const getRandomPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const randomPokemonId = Math.floor(Math.random() * response.data.count) + 1;
      const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
      setPokemonOfTheDay({
        name: pokemonResponse.data.name,
        image: pokemonResponse.data.sprites.front_default,
        type: pokemonResponse.data.types[0].type.name,
      });
    } catch (error) {
      console.error('Error fetching random Pokemon:', error);
    }
  };

  const handlePokeballClick = () => {
    getRandomPokemon();
  };

  return (
    <div className='content'>
      <div className='card'>
        <div className='pokeball' onClick={handlePokeballClick}>
          <img src={pokeballImage} alt='Pokeball' />
        </div>
        <h1>Pokemon of the Day</h1>
        {pokemonOfTheDay && (
          <div>
            <img src={pokemonOfTheDay.image} alt={pokemonOfTheDay.name} />
            <p>Name: {pokemonOfTheDay.name}</p>
            <p>Type: {pokemonOfTheDay.type}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
