import React, { useState, useEffect } from "react";
import ThemeModeContext from "./ThemeModeContext";

const ThemeModeProvider = props => {
  const [darkMode, setDarkMode] = useState("true");

  useEffect(() => {
    if (localStorage.getItem("darkMode") === null) {
      localStorage.setItem("darkMode", true)
    }
    else {
      localStorage.setItem("darkMode", darkMode)
    }
  }, [darkMode]);

  // const [darkMode, setDarkMode] = useState(
  //   storage.getItem("darkMode") === "true"
  // );

  const onSetDarkMode = darkMode => {
    setDarkMode(darkMode);
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
