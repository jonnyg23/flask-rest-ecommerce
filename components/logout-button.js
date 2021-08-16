import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: pink[600],
    color: "white",
  },
}));

const LogoutButton = () => {
  const classes = useStyles();
  const { logout } = useAuth0();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
