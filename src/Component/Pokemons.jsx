import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonCardColor from './PokemonCardColor';

const Pokemons = ({url}) => {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
     axios.get(url)
     .then(res => setPokemon(res.data))
    },[])
    console.log(pokemon);

    return (
    <div>
        <Link to={`/pokemons/${pokemon.id}`}>
          <PokemonCardColor pokemon={pokemon}/>
        </Link>
              
    </div>
       
    );
};

export default Pokemons;