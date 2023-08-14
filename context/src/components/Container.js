import React from "react";
import Button from './Button';
import Header from './Header';
import Profile from './Profile';



//import { useContext } from "react";
//import ThemeContext from "../Context/ThemeContext";
import {useTheme} from "../Context/ThemeContext";
function Container() {

    const {theme}=useTheme();
  return (
    <div className={`App ${theme==="dark"? "dark" : ""}`}>
      <Header />

      <Button></Button>

      <hr></hr>
      <Profile/>
    </div>
  );
}

export default Container;
