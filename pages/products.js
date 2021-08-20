import React from "react";
import { Typography, Box } from "@material-ui/core";
import Layout from "../components/Layout";
import setInitTheme from "../hooks/setInitTheme";

const Products = ({ initialAppTheme }) => {
  setInitTheme(initialAppTheme);

  return (
      <Layout>
        <Box>
          <Typography variant="h3" color="textSecondary" gutterBottom>Products</Typography>
          <Typography variant="body1">Dev in Progress!</Typography>
        </Box>
      </Layout>
  );
};

export default Products;

export function getServerSideProps({ req }) {
  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light",
    },
  };
}
