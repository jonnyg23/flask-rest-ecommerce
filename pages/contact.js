import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Contact me!
      </Typography>
      <Typography variant="body1">Email: jonguti23@outlook.com</Typography>
    </Box>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* You can add a NestedLayout component here as such: <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};
