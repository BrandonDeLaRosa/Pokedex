import React from 'react';

const ByTypeNameColor = () => {
    return (
        <div>
             <h3 className='pokemonByIdId'> #{pokemonById.id}</h3>
             <h3 className='pokemonByIdName'><b>{pokemonById.name?.toUpperCase()}</b></h3>
        </div>
    );
};

export default ByTypeNameColor;