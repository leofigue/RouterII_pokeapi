import React from 'react'

const Home = () => {
    const imgPokemon='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
  return (
    <div className='home'>
        <h1 className='titulo'>Bienvenido maestro pokemon</h1>
        <img src={imgPokemon}></img>
    </div>
  )
}

export default Home
Home