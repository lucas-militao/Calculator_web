import React, { useState } from 'react';

export default function App() {

  const [ display, setDisplay ] = useState('0');
  const [ lastNumberInserted, setLastNumberInserted ] = useState(0);
  const [ resultOfLastOperation, setResultOfLastOperation ] = useState(0);
  const [ finishCalculation, setFinishCalculation ] = useState(false);
  const [ operation, setOperation ] = useState(' ');

  function handleInput(event) {
    const digit = event.target.value;
    
    if (display == '0' || finishCalculation || display == "ERR") {
      setDisplay(digit)
    } else if (display.length < 8) {
      setDisplay(display + digit);
    }
  }

  function handleOperationButtonClick(event) {
    const op = event.target.value;
    setOperation(op);
    if(lastNumberInserted == 0) {
      setLastNumberInserted(parseFloat(display));
    } 
    setDisplay('0');
  }

  function handleResult() {
    var currentInput = lastNumberInserted;

    if (display != '0') currentInput = parseFloat(display, 10);

    const result = calculation(lastNumberInserted, currentInput, operation).toString();
    
    if (result.length > 8) {
      handleClearAll();
      setDisplay("ERR");
    } else {
      setDisplay(result);
      setResultOfLastOperation(result);
      setFinishCalculation(true);
    }
  }

  function handleClear() {
    if (!finishCalculation) {
      if (operation != ' ') {
        setOperation(' ');
        setDisplay(lastNumberInserted.toString());
      } else {
        setLastNumberInserted(0);
        setDisplay('0');
      }
    } else {
      lastNumberInserted(0);
      setResultOfLastOperation(0);
      setDisplay('0');
      setFinishCalculation(false);
    }
  }

  function handleClearAll() {
    setResultOfLastOperation(0);
    setDisplay('0');
    setFinishCalculation(false);
    setLastNumberInserted(0);
    setOperation(' ');
  }

  function handleNumberSign() {
    if (display != "0") {
      if (display[0] == "-") {
        setDisplay(display.substring(1, display.length));
      } else {
        setDisplay("-" + display);
      }
    }
  }

  function handleDecimalDot() {
    if (!display.includes(".")) {
      if (display == "0") {
        setDisplay(display + ".");
      } else {
        if (display.length < 8) {
          setDisplay(display + ".");
        }
      }
    } 
  }

  function calculation(num1, num2, op) {
    if (op == '+') return num1 + num2;
    else if (op == '-') return num1 - num2;
    else if (op == '/') return num1 / num2;
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
            <button value='=' onClick={handleResult}>=</button>
          </div>
          <div id="line4">
            <button onClick={handleInput} value= "0">0</button>
            <button onClick={handleDecimalDot} value=".">.</button>
            <button onClick={handleNumberSign} value="+/-">+/-</button>
            <button value='/' onClick={handleOperationButtonClick}>/</button>
          </div>
          <div id="line5">
            <button onClick={handleClearAll}>AC</button>
            <button onClick={handleClear}>C</button>
          </div>
        </div>
      </div>
    </>
  )

}