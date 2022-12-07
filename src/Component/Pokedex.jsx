import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Pokemons from './Pokemons';
import { useNavigate } from 'react-router-dom';
import trainer from '../assets/trainer.png'

const Pokedex = () => {
    const userName = useSelector(state => state.name)
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [pokemons,setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const navigate = useNavigate()
    
    useEffect(() => {
     axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => setPokemons(res.data.results))
    },[])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
         .then(res => setPokemonTypes(res.data.results))
    },[])
    // console.log(pokemonTypes);
    // console.log(pokemons);
    const searchByName = () =>{
       navigate(`/pokemons/${pokemonName.toLowerCase()}`)
    }

    const filterType = (e) => {
        // alert("filtrando")
        // alert(e.target.value)
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
    }

    const [page, setPage] = useState (1)
    const pokemonsPerPage = 5

    const lastIndex = page * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage

    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex)

    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

    const numbers = []
    for (let i = 1; i <= totalPages; i++){
        numbers.push(i)
    }
   console.log(numbers);

    return (
        <div className='pokedexContent'>

            <div className='trainer'>
                <img className='trainerImg' src={trainer} alt="" />
                <h3 className='trainerText'><b>Welcome trainer:</b> {userName},</h3>
                <h4 className='textFind'>here you can find your favorite pokemon.</h4>
            </div>

            <div className='pokedexBrosers'>

                <form onSubmit={searchByName} className='searchByName'>
                    <div className='inputByName'>
                        <input className='inputPokedex' type="text" placeholder='    Pokemon search' 
                            value={pokemonName} onChange={e => setPokemonName(e.target.value)} required />
                        <button className='pokedexButton'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                    <select className='pokedexSelect' name="" id="" onChange={filterType}>
                        {
                            pokemonTypes.map(pokemonType => (
                                <option className='optionTypes'
                                    value={pokemonType.url}
                                    key={pokemonType.url}>
                                    {pokemonType.name}
                                </option>
                            ))
                        }
                    </select>
                </form>

            </div>
            <div className='pokemonsList'>
                {
                    pokemonPaginated.map(pokemon => (
                        <li key={pokemon.url}>
                            <Pokemons
                                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            />
                        </li>
                    ))
                }
            </div>

            <div className='pageButtons'>
                <button className='prevButton' onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >Prev Page</button>

                {numbers.map(number => (
                    <button className='pages' onClick={() => setPage(number)}>{number}</button>
                ))}

                <button className='nextButton' onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >Next Page</button>
            </div>

        </div>
    );
};

export default Pokedex;