import React, { useState } from 'react';

export default function App() {

  const [ result, setResult ] = useState(0);

  return (
    <>
      <div id="calculator">
        <input type="number" value={result} disabled="disabled"/>
      </div>
    </>
  )

}