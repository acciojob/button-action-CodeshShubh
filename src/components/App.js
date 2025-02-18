import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [isVisible, setisVisible] = useState(true)

  return (
    <div className="App" id="main">
        <p id="para" className={isVisible? 'show' : 'hide'}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        <button id="click" onClick={()=>setisVisible(prev=>!prev)}>{isVisible ? 'hide' : 'show'}</button>
    </div>
  );
}

export default App
