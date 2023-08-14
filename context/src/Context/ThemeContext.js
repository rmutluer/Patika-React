import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ThemeContext = createContext();
//
export const ThemeProvider = ({children})=>{
//const ThemeProvider = ({ children }) => {
  //const[theme, setTheme] = useState('dark');
  const [theme, setTheme] = useState(!localStorage.getItem("theme") && "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };

  // return <ThemeContext.Provider value='dark'>{children}</ThemeContext.Provider>
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

//export default ThemeContext;
//export { useTheme, ThemeProvider };
