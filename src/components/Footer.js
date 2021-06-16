import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// TODO: Lock the footer to the bottom of the screen

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    color: theme.palette.primary.contrastText,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box pt={6} pb={6} className={classes.root}>
      <Typography className={classes.text}>This is the footer.</Typography>
    </Box>
  );
};

export default Footer;
