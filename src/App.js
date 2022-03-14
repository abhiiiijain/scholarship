
import React from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';
import Home from './Components/Home';
import {useState} from "react";



function App() {
  const[visible, setVisisble]=useState(true);
  const shouldRender=()=>{
    setVisisble(false);
  };


  return (
    <div>
      {visible && <FirstPage shouldRender={shouldRender}/>}
      {!visible && <Home/>}
    </div>
  );
}

export default App;
