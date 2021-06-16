import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ThemeModeContext from "../context/ThemeModeContext";

const useStyles = makeStyles((theme) => ({
  light: {
    color: "orange",
  },
  dark: {
    color: theme.palette.secondary.main,
  },
}));

const ThemeModeToggle = () => {
  const classes = useStyles();
  const ThemeContext = useContext(ThemeModeContext);

  return (
    <IconButton
      onClick={() => ThemeContext.onSetDarkMode(!ThemeContext.darkMode)}
    >
      {ThemeContext.darkMode !== true ? (
        <Brightness4Icon fontSize="large" className={classes.light} />
      ) : (
        <Brightness4Icon fontSize="large" className={classes.dark} />
      )}
    </IconButton>
  );
};

export default ThemeModeToggle;
