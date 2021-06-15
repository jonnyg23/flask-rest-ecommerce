import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Welcome = () => (
  <Box>
    <Typography variant="h3">Welcome to Flask-Ecommerce!</Typography>
    <Typography variant="h5">
      Frontend UI is currently under development. However, the backend API is
      functional.
    </Typography>
    <Typography variant="body1">
      This is the Flask-Ecommerce REST Website template.
    </Typography>
  </Box>
);

export default Welcome;
