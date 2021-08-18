import React from "react";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import setInitTheme from "../hooks/setInitTheme";

const Contact = ({ initialAppTheme }) => {
  setInitTheme(initialAppTheme);

  return (
    <>
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

export function getServerSideProps({ req }) {
  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light",
    },
  };
}
