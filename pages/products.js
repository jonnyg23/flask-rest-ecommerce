import React from "react";
import { Typography, Box } from "@material-ui/core";
import Layout from "../components/Layout";
import setInitTheme from "../hooks/setInitTheme";
import { FRONTEND_URL } from "../components/types";

const Products = ({ initialAppTheme }) => {
  setInitTheme(initialAppTheme);

  return (
    <Layout
      title="Products | Ecommerce Website Template - Nextjs, Flask, & Material-ui"
      description="Find Yourself Something NEW to Wear! Catchy info on my products here."
      url={`${FRONTEND_URL}` + "/products"}
    >
      <Box>
        <Typography variant="h3" color="textSecondary" gutterBottom>
          Products
        </Typography>
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
