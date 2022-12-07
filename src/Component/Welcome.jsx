import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { user } from '../store/slices/name.slice';
import pokedex from '../assets/pokedexPNG.png'

const Welcome = () => {
    const [name, setName]= useState("")
    const navigate= useNavigate()
    const dispatch = useDispatch()

    const enterName = () =>{
       dispatch(user(name))
       navigate("/pokedex")
    }

    return (
        <form onSubmit={enterName} className='inputContainer'>
            <img className='logo' src={pokedex} alt="" />
            <h1 className='welcomeText'>Welcome trainer!</h1>
            <h2>To start, please enter your name.</h2>
            <div className='trainerName'>
                <input className='welcomeInput' type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Trainer name" required />
                <button className='welcomeButton'>Enter</button>
            </div>
           <div className='footer'>
             {/* <div className='bars'> */}
             <div className='red'></div>
            <div className='black'></div>
            {/* </div> */}
            {/* <div className='circulo'>
                <div className='whiteC'></div>
                <div className='grayC'></div>
            </div> */}
           </div>
        </form> 
    );
};

export default Welcome;

// 