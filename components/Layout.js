import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, NoSsr } from "@material-ui/core";
import { CustomThemeContext } from "../context/CustomThemeProvider";
import NavBar from "./nav-bar";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.grey["A200"],
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const setBackgroundColor = (theme, contextTheme) => {
  const appTheme = contextTheme.appTheme;
  if (appTheme === "light") {
    return "white";
  } else {
    return theme.palette.grey["A200"];
  }
};
// TODO: Find out if NoSsr is really needed wrapping pages that need global theme.
const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const ThemeContext = useContext(CustomThemeContext);

  return (
    <>
      {/* NoSsr is added to prevent an initial flicker of theme change - it prevents the component wrapped in NoSsr from server side rendering */}
      <NoSsr>
        <NavBar></NavBar>
      </NoSsr>
      <div
        style={{
          backgroundColor: setBackgroundColor(theme, ThemeContext),
          minHeight: "100vh",
        }}
      >
        <Container className={classes.container}>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
