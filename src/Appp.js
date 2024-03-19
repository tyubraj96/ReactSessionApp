import PokemonForm from "./Pokemon";
import { useState } from "react";

function Appp() {
  const [pokemonName, setPokemonName] = useState("mRLO");

  function handleSubmit(PokemonName) {
    setPokemonName(PokemonName);
    console.log(PokemonName,"App bata print vako")
  }
  
  return <PokemonForm myPokemon={pokemonName} onSubmit={handleSubmit} />; //rendering component
}

export default Appp;
