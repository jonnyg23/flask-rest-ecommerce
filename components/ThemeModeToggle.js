import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness5TwoToneIcon from '@material-ui/icons/Brightness5TwoTone';
import Brightness2TwoToneIcon from '@material-ui/icons/Brightness2TwoTone';
import ThemeModeContext from "../context/ThemeModeContext";

const useStyles = makeStyles((theme) => ({
  light: {
    color: theme.palette.secondary.main,
  },
  dark: {
    color: theme.palette.secondary.main,
  },
}));

const ThemeModeToggle = ({ fontSize }) => {
  const classes = useStyles();
  const ThemeContext = useContext(ThemeModeContext);

  return (
    <IconButton
      onClick={() => ThemeContext.onSetDarkMode(!ThemeContext.darkMode)}
    >
      {ThemeContext.darkMode !== true ? (
        <Brightness5TwoToneIcon fontSize={fontSize} className={classes.light} />
      ) : (
        <Brightness2TwoToneIcon fontSize={fontSize} className={classes.dark} />
      )}
    </IconButton>
  );
};

export default ThemeModeToggle;
