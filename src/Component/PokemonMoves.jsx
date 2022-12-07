import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonMoves = ({moves}) => {

    const [pokemonMoves, setPokemonMoves] = useState([])

    useEffect(() => {
        axios.get(moves)
         .then(res=> setPokemonMoves(res.data))
    },[])

    // console.log(pokemonMoves);
    return (
        <div className='moveContainer'>
            <h3 className='pokemonMove'>{pokemonMoves.name}</h3>
        </div>
    );
};

export default PokemonMoves;