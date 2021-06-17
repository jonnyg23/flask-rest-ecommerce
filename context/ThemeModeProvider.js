import React, { useState } from "react";
import ThemeModeContext from "./ThemeModeContext";

const storage = {
  getItem(key) {
    if (localStorage) {
      return localStorage.getItem(key);
    }
  },
  setItem(key, value) {
    if (localStorage) {
      return localStorage.setItem(key, value);
    }
  }
};

const ThemeModeProvider = props => {
  const [darkMode, setDarkMode] = useState(
    storage.getItem("darkMode") === "true"
  );
  const onSetDarkMode = darkMode => {
    setDarkMode(darkMode);
    storage.setItem("darkMode", darkMode);
  };
  return (
    <ThemeModeContext.Provider
      value={{
        darkMode,
        onSetDarkMode
      }}
    >
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
