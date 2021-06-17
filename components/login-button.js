import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: indigo[500],
    color: "white",
  },
}));

const LoginButton = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      // color="secondary"
      // disableElevation
      className={classes.root}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
