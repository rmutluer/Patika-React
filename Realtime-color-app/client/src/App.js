
import './App.css';
import {useEffect, useState} from 'react';
import { init, subscribe } from './components/socketApi';

import Palette from './components/Palette';

function App() {
  const [activeColor, setActiveColor] = useState('#282c34')

  

useEffect(()=>{
  init();
  //subscribe()
  subscribe((color) => setActiveColor(color))
},[])

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
      <Palette activeColor={activeColor}></Palette>
    </div>
  );
}

export default App;
