import {PokemonForm} from "./Pokemon";
import {PokemonFallbackInfo} from "./Pokemon"
import { useState } from "react";

function Appp() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(PokemonName) {
    setPokemonName(PokemonName);
    console.log(PokemonName,"App bata print vako")
  }
  
  return (	
	<div className='pokemon-info-app'>
  		<PokemonForm myPokemon={pokemonName} onSubmit={handleSubmit} />
		<PokemonFallbackInfo /> 
	</div>
	);
}

export default Appp;
