import React from "react";
import { Typography, Box } from "@material-ui/core";
import Layout from "../components/Layout";

const Products = () => {
  return (
    <>
      <Layout>
        <Box>
          <Typography variant="h3">Products</Typography>
          <Typography variant="body1">Dev in Progress!</Typography>
        </Box>
      </Layout>
    </>
  );
};
//<JSONPretty id="json-pretty" data={data}></JSONPretty>
export default Products;
