import React from "react";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: indigo[500],
    color: "white",
  },
}));

const LoginButton = ({ user, loading }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={() => router.push('/api/auth/login')}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
