import React from "react";
import { NavLink } from "../components/NavLink";
import {
  AppBar,
  Grid,
  Container,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import StorefrontIcon from "@material-ui/icons/Storefront";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import ThemeModeToggle from "./ThemeModeToggle";
import { Desktop, SmallScreen } from "./Responsive";
import HamburgerMenu from "./HamburgerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
  inactiveLink: {
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={3} className={classes.appBar}>
      <Toolbar>
        <Container className={classes.root}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Desktop>
              <Grid item xs={1}>
                <NavLink href="/" exact className={classes.inactiveLink}>
                  <StorefrontIcon fontSize="large" className={classes.icon} />
                </NavLink>
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
                <StorefrontIcon fontSize="medium" className={classes.icon} />
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
