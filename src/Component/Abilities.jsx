import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Abilities = ({abilitiesRoute}) => {
    
    const [pokemonAbilities, setPokemonAbilities] = useState([])

    useEffect(() => {
        axios.get(abilitiesRoute)
         .then(res => setPokemonAbilities(res.data))
         .catch(error => console.log(error.response))
    },[])

    // console.log(pokemonAbilities);
    return (
        <div className='ability'>
            <h3>{pokemonAbilities.name}</h3>
        </div>
     
    );
};

export default Abilities;