import React from "react";
import { Grid } from "@material-ui/core";

import AuthenticationButton from "./authentication-button";
import ProfileNav from "./profile-nav";

const AuthNav = () => (
  <Grid container justify="flex-end" spacing={3}>
    <Grid item>
      <ProfileNav />
    </Grid>
    <Grid item>
      <AuthenticationButton />
    </Grid>
  </Grid>
);

export default AuthNav;
