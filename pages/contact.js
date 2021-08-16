import React from "react";
import { Box, Typography } from "@material-ui/core";
import { NavBar } from "../components";
import Layout from "../components/Layout";

const Contact = () => {

  return (
    <>
      <NavBar></NavBar>
      <Layout>
        <Box>
          <Typography variant="h3" gutterBottom>
            Contact me!
          </Typography>
          <Typography variant="body1">Email: jonguti23@outlook.com</Typography>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
