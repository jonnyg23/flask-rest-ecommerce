import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: pink[600],
    color: "white",
  },
}));

const LogoutButton = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={() => router.push('/api/auth/logout')}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
