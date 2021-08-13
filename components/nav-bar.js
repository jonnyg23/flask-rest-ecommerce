import React from "react";
import { AppBar, Grid, Container, Toolbar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import StorefrontIcon from "@material-ui/icons/Storefront";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import ThemeModeToggle from "./ThemeModeToggle";
import { Desktop, SmallScreen } from "./Responsive";
import HamburgerMenu from "./HamburgerMenu";
import { NoSsr } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
}));

const NavBar = ({ initialAppTheme, yes }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log("YES", yes);
  console.log("initiaTheme", initialAppTheme);
  console.log("NavBar", theme.palette.primary.main);

  return (
    <AppBar id="AppBar" position="static" elevation={3}>
      <Toolbar>
        <Container className={classes.root}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Desktop>
              <Grid item xs={1}>
                <StorefrontIcon fontSize="large" />
              </Grid>
              <Grid item xs={7}>
                <MainNav />
              </Grid>
              <Grid item xs={3}>
                <AuthNav />
              </Grid>
              <Grid item xs={1}>
                <ThemeModeToggle fontSize="large" />
              </Grid>
            </Desktop>
            <SmallScreen>
              <Grid item xs={2}>
                <StorefrontIcon fontSize="medium" />
              </Grid>
              <Grid container item xs={10} justify="flex-end">
                <HamburgerMenu />
              </Grid>
            </SmallScreen>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
