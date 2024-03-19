import React from "react";
import { useState } from "react";
import pikachuImage from "./download.jpg";
export const PokemonForm = ({
  myPokemon,
  initialPokemon = myPokemon || "",
  onSubmit,
}) => {
  const [pokemonName, setPokemonName] = useState(initialPokemon);

  console.log(initialPokemon);
  function handleSubmit(e) {
    e.preventDefault();
    setPokemonName(pokemonName);
    console.log(pokemonName, "pokemon bata print vako");
    onSubmit(pokemonName);
  }
  // console.log(pokemonName);
  function handleChange(e) {
    setPokemonName(e.target.value);
    // console.log(pokemonName);
  }

  function handleSelect(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div>
      <form className="pokemon-form" onSubmit={handleSubmit}>
        <label className="pokemon-name" htmlFor="pokenName-input">
          Pokemon name
        </label>
        <div className="pkemom">
          Try
          <button
            className="invisible-button"
            onClick={() => handleSelect("Pikachu")}
          >
            "Pikachu"
          </button>
          <button
            className="invisible-button"
            onClick={() => handleSelect("crasta")}
          >
            "crasta"
          </button>
          or
          <button
            className="invisible-button"
            onClick={() => handleSelect("marlo")}
          >
            marlo
          </button>
        </div>

        <div>
          <input
            type="text"
            id="pokenName-input"
            placeholder="pokemon Name..."
            onChange={handleChange}
            value={pokemonName}
          />
          <button type="submit" disabled={!pokemonName.length}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export const PokemonFallbackInfo = () => {
  return (
    <div class="container">
      <div class="header">
        <div class="time">21:07 36.429</div>
      </div>
      <div class="content">
        <img src={pikachuImage} alt="Pikachu" />
        <h2>Pikachu 025</h2>
        <ul>
          <li>Discharge: 35 (Electric)</li>
          <li>Thunder: 100 (Electric)</li>
          <li>Thunderbolt: 55 (Electric)</li>
        </ul>
      </div>
    </div>
  );
};
