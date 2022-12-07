import React from 'react';
import { Link } from 'react-router-dom';
import pokebola from '../assets/pokemon.png'
import Pokedex from '../assets/camara.png';
import pokedex from '../assets/pokedexPNG.png'
import pokemon from '../assets/pikachu.png'
import pok from '../assets/pokeball.png'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img className='headerImg' src={pokedex} alt="" />
                <div className='links'>
                    <Link className='linksInd' to="/">Home
                        <div>
                            <img className='homeIcon' src={pokebola} alt="homeImg" />
                        </div>
                    </Link>
                    <Link className='linksInd' to="/Pokedex">Pokedex
                        <div>
                            <img className='pokedexIcon' src={Pokedex} alt="pokedexImg" />
                        </div>
                    </Link>
                    <Link className='linksInd' to="/pokemons/1">Info
                        <div>
                            <img className='pokemonIcon' src={pokemon} alt="pokemonImg" />
                        </div>
                    </Link>
                </div>
                
            </div>
            <div className='headerBlack'>
                {/* <img  className='pokeHeader' src={pok} alt="" /> */}
                <div className='circuloHeader'>
                    <div className='whiteC'></div>
                    <div className='grayC'></div>
                </div>       
            </div>
        </div>
    );
};

export default Header;