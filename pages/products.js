import React from "react";
import { Typography, Box } from "@material-ui/core";
import { NavBar } from "../components";
import Layout from "../components/Layout";

const Products = () => {
  // const serverUrl = process.env.REACT_APP_SERVER_URL;
  // const requestUrl = serverUrl + "/collections";

  return (
    <>
      <NavBar></NavBar>
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
