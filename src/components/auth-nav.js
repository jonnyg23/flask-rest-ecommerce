import React from "react";
import { Grid } from "@material-ui/core";

import AuthenticationButton from "./authentication-button";

const AuthNav = () => (
  <Grid container justify="flex-end" alignItems="center">
    <Grid item>
      <AuthenticationButton />
    </Grid>
  </Grid>
);

export default AuthNav;
