import React, { useState } from 'react';

export default function App() {

  const [ display, setDisplay ] = useState('0');
  const [ lastNumberInserted, setLastNumberInserted ] = useState(0);
  const [ finishCalculation, setFinishCalculation ] = useState(false);
  const [ operation, setOperation ] = useState(' ');

  function handleInput(event) {
    const digit = event.target.value;
    
    if (display == '0' || finishCalculation) {
      setDisplay(digit)
    } else if (display.length < 8) {
      setDisplay(display + digit);
    }
  }

  function handleOperationButtonClick(event) {
    const op = event.target.value;
    setOperation(op);
    if(lastNumberInserted == 0) {
      setLastNumberInserted(parseInt(display, 10));
    } 
    setDisplay('0');
  }

  function handleOperation() {
    const currentInput = parseInt(display, 10);
    if(operation == '+') {
      const result = lastNumberInserted + currentInput;
      setDisplay(result.toString());
      setLastNumberInserted(result)
      setFinishCalculation(true);
    } else if(operation == '-') {
      const result = lastNumberInserted - currentInput
      setDisplay(result);
      setLastNumberInserted(result);
      setFinishCalculation(true);
    } else if(operation == '/') {
      setDisplay(lastNumberInserted / currentInput);
      setLastNumberInserted(result);
      setFinishCalculation(true);
    }
  }

  return (
    <>
      <div id="calculator">
        <input type="text" value={display} disabled="disabled"/>

        <div id="pad">
          <div id="line1">
            <button onClick={handleInput} value="7">7</button>
            <button onClick={handleInput} value= "8">8</button>
            <button onClick={handleInput} value= "9">9</button>
            <button value='+' onClick={handleOperationButtonClick}>+</button>
          </div>
          <div id="line2">
            <button onClick={handleInput} value= "4">4</button>
            <button onClick={handleInput} value= "5">5</button>
            <button onClick={handleInput} value= "6">6</button>
            <button value='-' onClick={handleOperationButtonClick}>-</button>
          </div>
          <div id="line3">
            <button onClick={handleInput} value= "1">1</button>
            <button onClick={handleInput} value= "2">2</button>
            <button onClick={handleInput} value= "3">3</button>
            <button value='=' onClick={handleOperation}>=</button>
          </div>
          <div id="line4">
            <button>AC</button>
            <button onClick={handleInput} value= "0">0</button>
            <button>C</button>
            <button value='/' onClick={handleOperationButtonClick}>/</button>
          </div>
        </div>
      </div>
    </>
  )

}