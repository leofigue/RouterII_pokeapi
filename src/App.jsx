
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion';
import { Route, Routes } from 'react-router-dom';


import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './views/Pokemon';

function App() {
  // https://www.youtube.com/watch?v=sFLJXMZyXks
  return (
    <>
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemon/:nombre" element={<Pokemon />} />
        <Route path="*" element={<Home />} />
      </Routes>           
    </>
  )
}

export default App
