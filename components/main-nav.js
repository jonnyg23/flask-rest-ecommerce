import React from "react";
import { NavLink } from "../components/NavLink";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProfileNav from "./profile-nav";

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
            href="/"
            exact
            className={classes.inactiveLink}
            // activeClassName={classes.activeLink}
          >
            <Typography>Home</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            href="/products"
            exact
            className={classes.inactiveLink}
            // activeClassName={classes.activeLink}
          >
            <Typography>Products</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            href="/contact"
            exact
            className={classes.inactiveLink}
            // activeClassName={classes.activeLink}
          >
            <Typography>Contact</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <ProfileNav />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainNav;
