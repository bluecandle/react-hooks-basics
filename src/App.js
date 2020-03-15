import React from 'react';
import useInput from '../useInput'

function App() {
  const name = useInput("Mr.")
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}/>
    </div>
  );
}

export default App;
