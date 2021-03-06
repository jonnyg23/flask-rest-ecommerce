import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  ListItem,
  List,
} from "@material-ui/core";
import JSONPretty from "react-json-pretty";

import Welcome from "../components/welcome";
import useAxios from "../hooks/useAxios";
import { backendApi } from "../apis/axiosRequests";
import ProductsButton from "../components/ProductsButton";

const Home = () => {
  const [url, setUrl] = useState("/products");

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
    <Box mt={4}>
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
          <JSONPretty id="json-pretty" data={data} style={{ overflow: 'auto' }}></JSONPretty>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
