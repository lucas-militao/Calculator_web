import React, { useState } from 'react';

export default function App() {

  const [ result, setResult ] = useState(0);

  return (
    <>
      <div id="calculator">
        <input type="number" value={result} disabled="disabled"/>

        <div id="line1">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
        </div>
        <div id="line2">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div id="line3">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>=</button>
        </div>
        <div id="line4">
          <button>AC</button>
          <button>0</button>
          <button>C</button>
          <button>/</button>
        </div>
      </div>
    </>
  )

}