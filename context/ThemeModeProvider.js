import React, { useState, useEffect } from "react";
import ThemeModeContext from "./ThemeModeContext";
import Cookie from "js-cookie";
import { parseCookies } from "../components/parseCookies";

const ThemeModeProvider = ({ initialDark = false, children }) => {
  console.log("value", initialDark);
  const [darkMode, setDarkMode] = useState(() => initialDark);

  useEffect(() => {
    Cookie.set("darkMode", darkMode);
    console.log("ThemeModeProvider","useEffect", "ran");
  }, [darkMode]);

  return (
    <ThemeModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

ThemeModeProvider.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  console.log("getInitialProps", cookies.darkMode);

  return {
    initialDark: cookies.darkMode,
  };
};

export default ThemeModeProvider;
