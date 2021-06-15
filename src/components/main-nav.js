import { NavLink } from "react-router-dom";
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

const MainNav = () => {
  return (
    <Box display="flex">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <NavLink to="/" exact>
            <Typography>Home</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/collections" exact>
            <Typography>Products</Typography>
          </NavLink>
        </Grid>
        <Grid item>
          <NavLink to="/contact" exact>
            <Typography>Contact Us</Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainNav;
