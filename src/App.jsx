import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Pokedex from './Component/Pokedex'
import PokemonId from './Component/PokemonId'
import Pokemons from './Component/Pokemons'
import ProtectedRoutes from './Component/ProtectedRoutes'
import Welcome from './Component/Welcome'

function App() {

  return (
    <HashRouter>
      <div className="App">
          <Header/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path='/pokemons' element={<Pokemons/>}/>
          <Route path='/pokemons/:id' element={<PokemonId/>}/>
          <Route path='/pokedex' element={<Pokedex/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
