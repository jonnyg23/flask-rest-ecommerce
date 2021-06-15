import React from "react";
import { AppBar, Grid, Container, Toolbar } from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import ThemeModeToggle from "./ThemeModeToggle";

const NavBar = () => {
  return (
    <div id="app-bar">
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item xs={1}>
                <StorefrontIcon fontSize="large" />
              </Grid>
              <Grid item xs={5}>
                <MainNav />
              </Grid>
              <Grid item xs={5}>
                <AuthNav />
              </Grid>
              <Grid item xs={1}>
                <ThemeModeToggle />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
