import React from 'react';
//import { useContext } from 'react';

//import ThemeContext from '../Context/ThemeContext';
import {useTheme} from '../Context/ThemeContext';

// function Button() {
function Button({children}) {

    //const data=useContext(ThemeContext);
    //const {theme, setTheme}=useContext(ThemeContext);
    const {theme, setTheme}=useTheme();
    //
    //console.log(data);
  return (
    // <div>Button  ({data})</div>
    // <div>{children}</div>
     //<div>Aktif Tema: {data.theme}</div>
     <div>Buton Aktif Tema: {theme}
     <div><button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>Tema Değiştir</button></div>

     </div>
  )
}

export default Button