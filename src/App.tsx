import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from './LifeCycle';
import FormDemo from './components/form-demo/FormDemo';
import MyButtonComponent from './components/wrapper-issue/MyButtonComponent';
import Panel from './components/hoc-demo/Panel';
import ShowOnlyWhen from './components/hoc-demo/ShowOnlyWhen';
import ShowNTimes from './components/hoc-demo/ShowNTimes';
import Dialog from './components/hoc-demo/Dialog';

function App() {

  return (
    <div className="App">
      <h1>THIS IS APP</h1>
      <Dialog
        header={<span>Sagar</span>}
        body={<span>I am a trainer.</span>}
        footer={<button>Ok</button>}
      />
    </div>
  );
}

export default App;
