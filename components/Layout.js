import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Container, NoSsr } from "@material-ui/core";
import { CustomThemeContext } from "../context/CustomThemeProvider";
import NavBar from "./nav-bar";

const useStyles = makeStyles((theme) => ({
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
    return theme.palette.grey["A700"];
  }
};

const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const ThemeContext = useContext(CustomThemeContext);

  return (
    <>
      <NavBar></NavBar>
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
