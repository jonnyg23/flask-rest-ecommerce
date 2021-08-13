import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Grid, Paper, Box, Typography, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import JSONPretty from "react-json-pretty";

import Welcome from "../components/welcome";
import useAxios from "../hooks/useAxios";
import { backendApi } from "../apis/axiosRequests";
import ProductsButton from "../components/ProductsButton";
import Layout from "../components/Layout";

const Home = () => {
  const [url, setUrl] = useState("/products");
  const theme = useTheme();

  const { response, isLoading } = useAxios({
    api: backendApi,
    method: "get",
    url: `${url}`,
    // config: JSON.stringify({ requireAuthentication: true }),
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <Box>
      <Head>
        <title>Welcome to Flask-Ecommerce</title>
        <meta
          name="description"
          content="Flask REST ecommerce website template"
        />
      </Head>
      <Welcome />
      <Grid container spacing={1}>
        <Grid item>
          <ProductsButton
            text="All Products"
            onClick={() => setUrl("/products")}
          />
        </Grid>
        <Grid item>
          <ProductsButton
            text="Mens Apparel"
            onClick={() => setUrl("/collections/mens-apparel")}
          />
        </Grid>
        <Grid item>
          <ProductsButton
            text="Womens Apparel"
            onClick={() => setUrl("/collections/womens-apparel")}
          />
        </Grid>
        <Grid item>
          <ProductsButton
            text="Holiday"
            onClick={() => setUrl("/collections/holiday")}
          />
        </Grid>
        <Grid item>
          <ProductsButton
            text="Misc"
            onClick={() => setUrl("/collections/misc")}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Typography variant="h5">Example JSON Data Output:</Typography>
      </Box>
      <Paper elevation={3}>
        <Box padding={2}>
          <JSONPretty
            id="json-pretty"
            data={data}
            style={{ overflow: "auto" }}
          ></JSONPretty>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {/* You can add a NestedLayout component here as such: <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export function getServerSideProps({ req }) {
  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light",
    },
  };
}