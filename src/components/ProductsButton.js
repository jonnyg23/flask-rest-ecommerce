import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { indigo, teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: teal[400],
    color: "white",
  },
}));

const ProductsButton = ({ text, onClick }) => {
  const classes = useStyles();

  return (
    <Button variant="contained" onClick={onClick} className={classes.root}>
      {text}
    </Button>
  );
};

export default ProductsButton;
