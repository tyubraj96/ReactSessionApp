
import ReactDOM from 'react-dom/client';
import React, {useState} from 'react';
import './style.css';
import Test from './test';
import styles from './index.module.css'


console.log(styles);

function Theme(){
         const [theme,setTheme]=useState(styles.light);
         console.log(theme);
      
         const toDark =()=> setTheme(styles.dark);
         const toLight =()=> setTheme(styles.light);
         return (
                  <div className={theme}>
                           {theme === styles.light ? (<button onClick={toDark}>Convert to Dark</button>) 
                           :
                           (<button onClick={toLight}>Convet to Light</button>)}
                          <Test />

                  </div>

         );


}

// import { useState } from 'react';//react provide the object in which we have to distucture useState so curly braces is used
// function App(){
//   const [state, setState] =useState(0);//useState is a hook

//   console.log(state);
//   const increment = ()=>{
//     setState(state + 1);
//   };
//   return(
//     <div>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }
const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<Theme />);


