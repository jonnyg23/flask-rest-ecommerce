import { NavLink } from "react-router-dom";
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

const MainNav = () => {
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
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography>Home</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/collections"
            exact
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography>Products</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink
            to="/contact"
            exact
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography>Contact Us</Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainNav;
