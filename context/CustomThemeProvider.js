import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "../themes";
import Cookie from "js-cookie";
import { parseCookies } from "../components/parseCookies";

export const CustomThemeContext = createContext({
  appTheme: "light",
  setTheme: null,
});

const CustomThemeProvider = ({ children, initialAppTheme }) => {
  // State to hold selected theme
  const [themeName, _setThemeName] = useState(() => initialAppTheme);

  // Retrieve theme object by theme name
  const theme = getTheme(themeName);

  // Wrap setThemeName to store new theme names as cookie.
  const setThemeName = (name) => {
    console.log("SetThemeName", name);
    Cookie.set("appTheme", name);
    _setThemeName(name);
  };

  const contextValue = {
    appTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;

export function getServerSideProps({ req }) {
  return {
    props: { intialAppTheme: req.cookies.appTheme || "light" },
  };
}
