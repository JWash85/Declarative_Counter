//IMPORTING useState(a named import)
import React from 'react'
import {useState} from 'react'
/**************************************
 * ALTERNATIVE METHOD TO THE ABOVE
 * import React, {useState} from 'react
 *************************************/

//INVOKE useState
function App (){
  let [counter, changeCounter] = useState(1)
  //Making function global/invoking changeCounter for declarative rendering
  window.changeCounter = changeCounter
  return(
    <div>
    <h1>{counter}</h1>
    <h4>{counter}</h4>
    </div>
  )
}
export default App;


/*********************************
 * ORIGINAL CODE FROM THE ACTIVITY
 *********************************/
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
