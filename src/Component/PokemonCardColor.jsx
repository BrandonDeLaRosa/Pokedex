import React from 'react';

const PokemonCardColor = ({pokemon}) => {
    const type = pokemon.types?.[0].type.name
    if(type === "grass"){
        return(
            <>
                <div className='green pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className=' cardInfo'>
                        <h3 className='nG pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sG statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sG statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sG statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sG statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    } else if( type === "fighting"){
        return (
            <>
               <div className='brown pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nB pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='nB statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='nB statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='nB statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='nB statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    } else if( type === "normal" ){
        return (
            <>
               <div className='violet pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nV pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sV statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sV statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sV statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sV statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    } else if( type === "poison"){
        return (
            <>
               <div className='purple pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nP pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sP statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sP statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sP statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sP statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    } else if( type === "ground"){
        return (
            <>
               <div className='chocolate pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nC pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sC statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sC statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sC statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sC statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "rock" ){
        return (
            <>
               <div className='plate pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nPl pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sPl statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sPl statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sPl statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sPl statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "bug" ){
        return (
            <>
               <div className='darkGreen pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='ndG pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sdG statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sdG statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sdG statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sdG statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    } else if( type === "ghost" ){
        return (
            <>
               <div className='darkBlue pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='ndB pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sdB statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sdB statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sdB statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sdB statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "steel" ){
        return (
            <>
               <div className='darkPlate pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='ndB pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sdB statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sdB statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sdB statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sdB statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "fire" ){
        return (
            <>
               <div className='orange pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nO pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sO statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sO statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sO statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sO statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "water" ){
        return (
            <>
               <div className='blue pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nBl pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sBl statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sBl statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sBl statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sBl statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "flying" ){
        return (
            <>
               <div className='lightBlue pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nLb pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sLb statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sLb statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sLb statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sLb statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "electric" ){
        return (
            <>
               <div className='yellow pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nY pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sY statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sY statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sY statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sY statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "psychic" ){
        return (
            <>
               <div className='bluePurple pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nBp pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sBp statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sBp statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sBp statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sBp statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "ice" ){
        return (
            <>
               <div className='blueWhite pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nBw pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sBw statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sBw statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sBw statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sBw statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "dragon" ){
        return (
            <>
               <div className='darkLightBlue pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nDbl pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sDbl statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sDbl statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sDbl statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sDbl statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "dark" ){
        return (
            <>
               <div className='darkGray pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nDgg pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sDggstatsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sDggstatsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sDggstatsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sDggstatsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "fairy" ){
        return (
            <>
               <div className='pink pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='nPi pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='sPi statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='sPi statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='sPi statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='sPi statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "unknown" ){
        return (
            <>
               <div className='darkLightBlue pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }else if( type === "shadow" ){
        return (
            <>
               <div className='darkSlateBlue pokemonCard'>
                    <img className='pokedexImg' src={pokemon.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <div className='cardInfo'>
                        <h3 className='pokemonName'>{pokemon.name?.toUpperCase()}</h3>
                        <h4 className='pokemonTypes'>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h4>
                        <h6 className='statsName'>Type</h6><br /><hr />

                        <div className='stats'>
                            <div className='stat1'>
                                <div className='statsName'>HP: <br /> <b className='statsNum'>{pokemon.stats?.[0]["base_stat"]}</b> </div>
                                <div className='statsName'>Defense:  <br /><b className='statsNum'>{pokemon.stats?.[2]["base_stat"]}</b> </div>
                            </div>
                            <div className='stat2'>
                                <div className='statsName'>Attack:  <br /><b className='statsNum'>{pokemon.stats?.[1]["base_stat"]}</b> </div>
                                <div className='statsName'>Speed:  <br /><b className='statsNum'>{pokemon.stats?.[5]["base_stat"]}</b> </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </>
        )
    }
};

export default PokemonCardColor;