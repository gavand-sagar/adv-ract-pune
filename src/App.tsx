import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from './LifeCycle';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <LifeCycle />}
    </div>
  );
}

export default App;
