import { NavLink } from "react-router-dom";
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  activeLink: {
    textTransform: "none",
    color: theme.palette.secondary,

    // "&.active": {
    //   color: theme.palette.secondary,
    // },
  },
  inactiveLink: {
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
}));

const MainNav = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <NavLink
            to="/"
            exact
            className={classes.inactiveLink}
            activeClassName={classes.activeLink}
          >
            <Typography>Home</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/collections"
            exact
            className={classes.inactiveLink}
            activeClassName={classes.activeLink}
          >
            <Typography>Products</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/contact"
            exact
            className={classes.inactiveLink}
            activeClassName={classes.activeLink}
          >
            <Typography>Contact</Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainNav;
