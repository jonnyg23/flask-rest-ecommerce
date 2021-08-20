import React from "react";
import { Grid } from "@material-ui/core";

import AuthButton from "./AuthButton";

const AuthNav = () => (
  <Grid container justifyContent="flex-end" alignItems="center">
    <Grid item>
      <AuthButton />
    </Grid>
  </Grid>
);

export default AuthNav;
