import React from 'react'
import { useState } from 'react';

function Appp() {
	const [pokemonName ,setPokemonName]= useState('');
	
	function handleSubmit(e){
		e.preventDefault();
		setPokemonName(pokemonName);
		console.log('i am submitted');
	}
	console.log(pokemonName);
	function handleChange(e){
		setPokemonName(e.target.value);
		// console.log(pokemonName);

	}
	
	function handleSelect (newPokemonName){
		setPokemonName(newPokemonName);
	}
	
         return (
              <div>
				<form className='pokemon-form' onSubmit={handleSubmit}>
					<label className='pokemon-name' htmlFor='pokenName-input'>
						Pokemon name
					</label>
					<div className='pkemom'>
						Try
						<button className='invisible-button' onClick={() =>handleSelect('Pikachu')}>"Pikachu"</button>
						<button className='invisible-button' onClick={() =>handleSelect('crasta')}>"crasta"</button>
						or
						<button className='invisible-button' onClick={() =>handleSelect('marlo')}>marlo</button>
					</div>
					
					<div>
						<input type='text' id='pokenName-input' placeholder='pokemon Name...' onChange={handleChange}  value={pokemonName}/>
						<button type="submit" disabled={!pokemonName.length}>submit</button>
					</div>
					
				</form>
		    </div>   

         );
  
}

export default Appp
