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
    }else if(byType === "fighting") {
        return (
            <>
                <div className=' brown pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "normal") {
        return (
            <>
                <div className=' violet pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "poison") {
        return (
            <>
                <div className=' purple pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "ground") {
        return (
            <>
                <div className=' chocolate pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "rock") {
        return (
            <>
                <div className=' plate pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "bug") {
        return (
            <>
                <div className=' darkGreen pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "ghost") {
        return (
            <>
                <div className=' darkBlue pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "steel") {
        return (
            <>
                <div className=' darkPlate pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "fire") {
        return (
            <>
                <div className=' orange pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "water") {
        return (
            <>
                <div className=' blue pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "flying") {
        return (
            <>
                <div className=' lightBlue pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "electric") {
        return (
            <>
                <div className=' yellow pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "psychic") {
        return (
            <>
                <div className=' bluePurple pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "ice") {
        return (
            <>
                <div className=' blueWhite pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "dragon") {
        return (
            <>
                <div className=' darkLightBlue pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "dark") {
        return (
            <>
                <div className=' darkGray pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "fairy") {
        return (
            <>
                <div className=' pink pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "unknown") {
        return (
            <>
                <div className=' darkLightBlue pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }else if(byType === "shadow") {
        return (
            <>
                <div className=' darkSlateBlue pokemonByIdImgContainer'>
                    <button className='prevBtn' onClick={previousPokemon}><i class="fa-solid fa-backward"></i></button>
                    <img className='pokemonByIdImg' src={pokemonById?.sprites?.other["official-artwork"]["front_default"]} alt="" />
                    <button className='nextBtn' onClick={nextPokemon}><i class="fa-solid fa-forward"></i></button>
                </div>
            </>
        )
    }                    
    
};

export default BackgroundColorByType;

