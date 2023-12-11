import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detalle = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const [urlImagen, setUrlImagen] = useState("");
  const [tipos, setTipos] = useState([])
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState([]);

  const URL_API = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

  useEffect(() => {
    const traeDetalle = async () => {
      const res = await fetch(URL_API);
      const data = await res.json();

      setUrlImagen(data.sprites.other.dream_world.front_default);
      setPokemonSeleccionado(data.stats);
      setTipos(data.types)
      
    };
    traeDetalle();
    
  }, []);

  return (
    <div className="divCard">
      <div className="card flex-row" style={{padding:"20px"}}>
        <img
          className="card-img-left example-card-img-responsive"
          src={urlImagen}
        />
        <div className="card-body" style={{ marginLeft: "60px" }}>
          <h4 className="card-title">
            <b>{nombre}</b>
          </h4>
          <ul>
            {pokemonSeleccionado.map((pokemon, index) => (
              <li className="card-text" key={index}>
                <b>{pokemon.stat.name}</b>: <span>{pokemon.base_stat}</span>
              </li>
            ))}
          </ul>
          {tipos.map((tipo, index) => (
              <p className="tipo" key={index}>{tipo.type.name}</p>
            ))}


        </div>
        
      </div>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
    
  );
};

export default Detalle;
