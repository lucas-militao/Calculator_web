import React, { useState } from 'react';

export default function App() {

  const [ result, setResult ] = useState('0');
  const [ userInput, setUserInput ] = useState('0');

  function handleInput(event) {
    const digit = event.target.value;
    
    if (userInput == '0') {
      setUserInput(digit)
    } else if (userInput.length < 8) {
      setUserInput(userInput + digit);
    }
  }

  return (
    <>
      <div id="calculator">
        <input type="text" value={userInput} disabled="disabled"/>

        <div id="pad">
          <div id="line1">
            <button onClick={handleInput} value="7">7</button>
            <button onClick={handleInput} value= "8">8</button>
            <button onClick={handleInput} value= "9">9</button>
            <button>+</button>
          </div>
          <div id="line2">
            <button onClick={handleInput} value= "4">4</button>
            <button onClick={handleInput} value= "5">5</button>
            <button onClick={handleInput} value= "6">6</button>
            <button>-</button>
          </div>
          <div id="line3">
            <button onClick={handleInput} value= "1">1</button>
            <button onClick={handleInput} value= "2">2</button>
            <button onClick={handleInput} value= "3">3</button>
            <button>=</button>
          </div>
          <div id="line4">
            <button>AC</button>
            <button>0</button>
            <button>C</button>
            <button>/</button>
          </div>
        </div>
      </div>
    </>
  )

}