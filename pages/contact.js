import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { NavBar } from "../components";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar></NavBar>
      <Container style={{ marginTop: theme.spacing(4) }}>
        <Box>
          <Typography variant="h3" gutterBottom>
            Contact me!
          </Typography>
          <Typography variant="body1">Email: jonguti23@outlook.com</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
