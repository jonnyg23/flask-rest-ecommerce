import React, { useEffect, useState } from "react";
import { Grid, Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import JSONPretty from "react-json-pretty";

import useAxios from "../hooks/useAxios";
import { backendApi } from "../apis/axiosRequests";
import ProductsButton from "../components/ProductsButton";
import Layout from "../components/Layout";
import setInitTheme from "../hooks/setInitTheme";
import { FRONTEND_URL } from "../components/types";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = ({ initialAppTheme }) => {
  const classes = useStyles();
  const [url, setUrl] = useState("/products");
  setInitTheme(initialAppTheme);

  // Fetches data from backend Async
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
    <Layout
      title="Ecommerce Website Template - Nextjs, Flask, & Material-ui"
      description="A killer Flask + Nextjs + Material-UI E-commerce Website template
    in the making!"
      url={FRONTEND_URL}
    >
      <Box>
        <Box>
          <Typography variant="h3" color="textSecondary" gutterBottom>
            Welcome to my E-commerce website template!
          </Typography>
          <Typography variant="h5" gutterBottom>
            This is a Flask + Nextjs + Material-UI E-commerce Website template
            in the making.
          </Typography>
        </Box>
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
          <Typography variant="h5" gutterBottom>
            Example JSON Data Output:
          </Typography>
        </Box>
        <Paper elevation={4} className={classes.paper}>
          <Box padding={2}>
            <JSONPretty
              id="json-pretty"
              data={data}
              style={{ overflow: "auto" }}
            ></JSONPretty>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;

export function getServerSideProps({ req }) {
  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light",
    },
  };
}
