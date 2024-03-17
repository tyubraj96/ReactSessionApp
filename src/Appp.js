import React from 'react'

function Appp() {
	function handleSubmit(e){
		e.preventDefault();
		const value =console.log(e.target[3].value);
		console.log('i am clicked');

	}
         return (
              <div>
				<form className='pokemon-form' onSubmit={handleSubmit}>
					<label className='pokemon-name'>
						Pokemon name
					</label>
					<div className='pkemom'>
						Try
						<button className='invisible-button'>"stivan</button>
						<button className='invisible-button'>"crasta"</button>
						or
						<button className='invisible-button'>marlo</button>
					</div>
					
					<div>
						<input type='text'></input>
						<button >submit</button>
					</div>
					
				</form>
		    </div>   

         );
  
}

export default Appp
