import React from "react";
import { Button } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const ProductsButton = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={{ backgroundColor: teal["A700"], color: "white" }}
    >
      {text}
    </Button>
  );
};

export default ProductsButton;
