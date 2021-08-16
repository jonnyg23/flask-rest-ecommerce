import React from "react";
import { Typography, Button, Box, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { NavBar } from "../components";

const Products = () => {
  const theme = useTheme();
  // const serverUrl = process.env.REACT_APP_SERVER_URL;
  // const requestUrl = serverUrl + "/collections";

  return (
    <>
      <NavBar></NavBar>
      <Container style={{ marginTop: theme.spacing(4) }}>
        <Box>
          <Typography variant="h3">Products</Typography>
          <Typography variant="body1">Dev in Progress!</Typography>
        </Box>
      </Container>
    </>
  );
};
//<JSONPretty id="json-pretty" data={data}></JSONPretty>
export default Products;
