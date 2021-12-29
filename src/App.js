
import './App.css';
import PinInput from "./pin/PinInput"

import { useState } from 'react';

function App() {
  const [pin ,setPin] = useState("");
  
  return (
    <div className="App">
      <h1>Card </h1>
      <PinInput onChange={(pin) => setPin(pin)}  pin={pin}/>
      <hr />
      <h3>{pin}</h3>
    </div>
  );
}

export default App;
