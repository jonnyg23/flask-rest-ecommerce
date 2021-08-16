import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: pink[600],
    color: "white",
  },
}));

const LogoutButton = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={() => <Link href="/api/logout" />}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
