import React from 'react';

const BackgroundColorByType = ({pokemonById,previousPokemon,nextPokemon}) => {
    const byType = pokemonById.types?.[0].type.name
    if (byType === "grass") {
        return (
            <>
                <div className=' green pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }
};

export default BackgroundColorByType;

