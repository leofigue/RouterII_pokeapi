import React, { createContext, useEffect, useState } from "react";


export const PokeApi = createContext({})

const PokeApiProvider = ({children}) => {

    const [urlapi, setUrlapi] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemones, SetPokemones] = useState([]);
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');

    useEffect (()=>{
        const getData = async () =>{
            const res = await fetch(urlapi);
            const data = await res.json();
            
            setNext(data.next)
            setPrevious(data.previous)
            SetPokemones(data.results)
        }
        getData();
    },[])

    return (
    <PokeApi.Provider value={{next, setNext, previous, setPrevious, pokemones, SetPokemones, urlapi, setUrlapi}}>
        {children}
    </PokeApi.Provider>
    )
}

export default PokeApiProvider
