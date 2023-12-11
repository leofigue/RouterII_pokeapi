import React from 'react'
import { useContext, useState } from 'react'
import { PokeApi } from '../context/PokeApi'
import { useNavigate } from 'react-router-dom'


const BuscarPokemon = () => {

  const navigate =  useNavigate()

  const { next, previous, pokemones, setUrlapi, setNext, setPrevious, SetPokemones } = useContext(PokeApi)
  const [value, setValue] = useState("");

  const verDetalle = ()=>{
    navigate(`/pokemon/${value}`)
  }

  const visibleP = previous==null ? "hidden" : "visible"
  const visibleN = next==null ? "hidden" : "visible"
  
  const BuscarSiguientes = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    
    setNext(data.next)
    setPrevious(data.previous)
    SetPokemones(data.results)
  }

  // console.log()

  return (
    <div style={{display:"flex", justifyContent:"center", padding:"30px"}}>
    <div className='buscar'>
      <p>Selecciona un pokemon</p>
      <div className='botones' >
        <button onClick={()=>BuscarSiguientes(previous)} style={{visibility:visibleP}}>- 20</button>
        <button onClick={()=>BuscarSiguientes(next)} style={{visibility:visibleN}}>+ 20</button>
      </div>
      <select onChange={ (event) => setValue( event.target.value)} style={{width:"100%"}}>
        <option key={-1} value=""></option>
        {pokemones.map((pokemon, index) => (
          <option key={index} value={pokemon.name} >
            {pokemon.name}
          </option>
        ))
        }
      </select>
      <button onClick={()=>verDetalle()}>Ver detalle</button>
    </div>
    </div>
  )
}

export default BuscarPokemon
