// Info.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Info.css'; // Import the CSS file

const Info = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      if (!searchQuery) {
        setError('Please enter a Pokemon name.');
        return;
      }

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}/`);
      setSearchedPokemon({
        name: response.data.name,
        image: response.data.sprites.front_default,
        type: response.data.types[0].type.name,
      });
      setError(null);
    } catch (error) {
      setError('Pokemon not found. Please enter a valid Pokemon name.');
      setSearchedPokemon(null);
    }
  };

  return (
    <div className='content'>
      <div className='card'>
        <h1>Pokemon Info</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Pokemon name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <p>{error}</p>}
        {searchedPokemon && (
          <div>
            <img src={searchedPokemon.image} alt={searchedPokemon.name} />
            <p>Name: {searchedPokemon.name}</p>
            <p>Type: {searchedPokemon.type}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
