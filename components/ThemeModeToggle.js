import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";
import Brightness2TwoToneIcon from "@material-ui/icons/Brightness2TwoTone";
import { CustomThemeContext } from "../context/CustomThemeProvider";

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
  const { appTheme, setTheme } = useContext(CustomThemeContext);

  const handleThemeChange = (appTheme, setTheme) => {
    if (appTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <IconButton onClick={() => handleThemeChange(appTheme, setTheme)}>
      {appTheme === "light" ? (
        <Brightness5TwoToneIcon fontSize={fontSize} className={classes.light} />
      ) : (
        <Brightness2TwoToneIcon fontSize={fontSize} className={classes.dark} />
      )}
    </IconButton>
  );
};

export default ThemeModeToggle;
