import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Abilities from './Abilities';
import PokemonMoves from './PokemonMoves';
import Pokemons from './Pokemons';
import change from '../assets/exchange.png'
import BackgroundColorByType from './BackgroundColorByType';

const PokemonId = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [isMeters, setIsMeters] = useState(false)
    const [isKilograms, setIsKilograms] = useState(false)
    const [pokemonById, setPokemonById] = useState({})
    const type1 = pokemonById.types?.[1]?.type.name
    // const [randomPokemons, setRandomPokemon]= useState()

    // const randomPokemon = () => {
    //     const random = Math.floor(Math.random() * 559)
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
    //      .then(res => setRandomPokemon(res.data) )
    // }

    //  useEffect(() => {
    //     if(`/pokemons/${id}`){
    //         // if({id}){
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //      .then(res => setPokemonById(res.data))
    //       .catch(error => console.log(error.response))
    //     }else{
    //         axios.get(`https://pokeapi.co/api/v2/pokemon/1/`)
    //         .then(res => setPokemonById(res.data))
    //     }
    //  },[id])

     useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
         .then(res => setPokemonById(res.data)) 
         .catch(error => {
            if(error.response?.status === 404){
                alert("Pokemon no encontrado") // setIsShowingModal(true)
                navigate("/pokedex");
            }
         })
     },[id])

     console.log(pokemonById);

    const changeValue= () =>{
        setIsKilograms(!isKilograms)
        setIsMeters(!isMeters)
    }

    const nextPokemon = () =>{
    //    navigate(`/pokemons/${id + 1}`)
    // navigate(`/pokemons/${parseInt(id) + 1}`)
    navigate(`/pokemons/${(pokemonById.id) + 1}`)
    }

    const previousPokemon = () => {
        // navigate(`${parseInt(id) - 1}`)
        // navigate(nextPokemon)-1
        navigate(`/pokemons/${pokemonById.id  - 1}`)
    }

    return (
        <div className='pokemonIdPage'>

            <div className='pokemonByIdContent'>
 
                 <div className='pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div> 

                {/* <BackgroundColorByType pokemonById={pokemonById} /> */}

                <div className='pokemonByIdInfo'>
                    <h3 className='pokemonByIdId'> #{pokemonById.id}</h3>
                    {/* <hr className='Nlines' /> <h3 className='pokemonByIdName'><b>{pokemonById.name?.toUpperCase()}</b></h3> <hr className='Nlines2'/> */}
                    <h3 className='pokemonByIdName'><b>{pokemonById.name?.toUpperCase()}</b></h3>
                    <div className='weightHeight'>
                        <div><h2><b>Weight: </b></h2><br /><h3>{isKilograms ? pokemonById.weight / 10 : pokemonById.weight} {isKilograms ? "Kilograms" : "Hectograms"}</h3></div>
                        <button className='changeBtn' onClick={changeValue}>
                            <i class="fa-solid fa-ruler-vertical"></i> / <i class="fa-solid fa-scale-unbalanced-flip"></i><br />
                            <i class="fa-solid fa-rotate"></i>
                        </button>
                        <div><h2><b>Height: </b></h2><br /><h3>{isMeters ? pokemonById.height / 10 : pokemonById.height} {isMeters ? "Meters" : "Decimeters"}</h3> </div>
                    </div>

                    <div className='typeAbility'>
                        <div className='pokemonByIdType'>
                            <h2><b>Type </b></h2><br />
                            <div className='types'>
                                <h3 className='t1'>{pokemonById.types?.[0].type.name}</h3>
                                {type1? <h3 className='t2'>{pokemonById.types?.[1]?.type.name}</h3> : null }
                            </div>
                        </div>

                        <div className='pokemonByIdAbilities'>
                            <h2>Abilities</h2><br />
                            <div className='abilityA'>
                                {
                                    pokemonById.abilities?.map(abilities => (
                                        <li>
                                            <Abilities
                                                key={pokemonById.id}
                                                abilitiesRoute={abilities.ability.url} />
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                        {/* imaginando que 40 es el valor dinamico, se multiplica por cien y se divide entre 150 para dar el valor real. */}


                        {/* 150 -> 100  */}
                        {/* 40  -> x */}

                    </div>
                    <div className='statsBars'>
                        <h2>Stats</h2><br />
                        <h3>HP: {pokemonById.stats?.[0]["base_stat"]}/150<div className='bar'>
                            <div style={{
                                height: "20px",
                                width: `${pokemonById.stats?.[0]["base_stat"] *100/150 }%`,
                                maxWidth:"100%",
                                background:"orange",
                                borderRadius:"0rem 1rem 1rem 0rem",
                                transition: "width 2s"}}></div>
                            </div></h3>
                        <h3>ATTACK: {pokemonById.stats?.[1]["base_stat"]} /150<div className='bar'>
                            <div style={{
                                height: "20px",
                                width: `${pokemonById.stats?.[1]["base_stat"] * 100/150 }%`,
                                maxWidth:"100%",
                                borderRadius:"0rem 1rem 1rem 0rem",
                                background:"orange",
                                transition: "width 0.5s",
                                }}></div>
                            </div></h3>
                        <h3>DEFENSE: {pokemonById.stats?.[2]["base_stat"]}/150<div className='bar'>
                            <div style={{
                                height: "20px",
                                width: `${pokemonById.stats?.[2]["base_stat"] * 100/150 }%`,
                                maxWidth:"100%",
                                borderRadius: "0rem 1rem 1rem 0rem",
                                background:"orange",
                                transition: "width 2s"}}></div>
                            </div></h3>
                        <h3>SPEED: {pokemonById.stats?.[5]["base_stat"]}/150<div className='bar'>
                            <div style={{
                                height: "20px",
                                width: `${pokemonById.stats?.[5]["base_stat"] * 100/150}%`,
                                maxWidth:"100%",
                                borderRadius:"0rem 1rem 1rem 0rem",
                                background:"orange",
                                transition: "width 2s"}}></div>
                            </div></h3>
                    </div>
                </div>
            </div>

            <div className='movements'>
                <h2>Movements</h2>
               <div className='pokemonMoves'>
               {
                    pokemonById.moves?.map(move => (
                        <li>
                            <PokemonMoves
                                key={move.id}
                                moves={move.move.url} />
                        </li>
                    ))
                }
               </div>
            </div>

        </div>
    );
};

export default PokemonId;