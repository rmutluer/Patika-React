import React from "react";
//import { useContext } from "react";

//import ThemeContext from "../Context/ThemeContext";
import {useTheme} from "../Context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div>Header Aktif Tema:{theme}</div>
      <div>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Tema Değiştir
        </button>
      </div>
    </div>
  );
}

export default Header;
