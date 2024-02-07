import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from './LifeCycle';
import FormDemo from './components/form-demo/FormDemo';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <FormDemo/>
    </div>
  );
}

export default App;
