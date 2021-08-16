import React from "react";
import { useRouter } from "next/router";
import { handleLogin } from "@auth0/nextjs-auth0";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: indigo[500],
    color: "white",
  },
}));

// TODO: Figure out how to implement handleLogin() else use router.push(href)
const LoginButton = ({ user, loading }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={() => handleLogin()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
