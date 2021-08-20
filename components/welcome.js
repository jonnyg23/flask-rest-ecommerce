import React from "react";
import { Box, Typography } from "@material-ui/core";

const Welcome = () => (
  <Box>
    <Typography variant="h3" color="textSecondary" gutterBottom>Welcome to Flask-Ecommerce!</Typography>
    <Typography variant="h5" gutterBottom>
      This is the Flask+Nextjs Ecommerce REST Website template.
    </Typography>
  </Box>
);

export default Welcome;
