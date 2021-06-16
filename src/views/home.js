import React, { useEffect, useState, Fragment } from "react";
import { Button, Paper, Box } from "@material-ui/core";
import JSONPretty from "react-json-pretty";

import Welcome from "../components/welcome";
import useAxios from "../hooks/useAxios";
import { backendApi } from "../apis/axiosRequests";

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
      <Button
        variant="contained"
        onClick={() => setUrl("/collections/holiday")}
      >
        Holiday
      </Button>
      <Button variant="contained" onClick={() => setUrl("/products")}>
        Products
      </Button>

      {/* <Box>{JSON.stringify(data)}</Box> */}
      <Paper elevation={3}>
        <JSONPretty id="json-pretty" data={data}></JSONPretty>
      </Paper>
    </Box>
  );
};

export default Home;
