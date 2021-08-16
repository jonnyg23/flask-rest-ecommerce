import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Box, Button, Typography, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import JSONPretty from "react-json-pretty";
import { Loading } from "../components/index";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  button: {
    backgroundColor: teal[400],
    color: "white",
  },
  result: {
    display: "block",
    wordBreak: "break-all",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const [accessToken, setAccessToken] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      setAccessToken(token);
    } catch (error) {
      setAccessToken(error.message);
    }
  };

  return (
    <Box>
      <div className={classes.image}>
        <Avatar
          variant="circle"
          alt="Profile"
          src={picture}
          className={classes.large}
        />
      </div>
      <Box mb={3}>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="body1">{email}</Typography>
      </Box>

      <Paper elevation={3}>
        <Box padding={2}>
          <JSONPretty
            id="user-bearer-token"
            data={user}
            style={{
              overflow: "auto",
            }}
          ></JSONPretty>
        </Box>
      </Paper>

      <Box mt={3} mb={1}>
        <Typography variant="body1">
          Click below to view your unique Bearer JWT Access Token:
        </Typography>
      </Box>
      <Box mb={2}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={callSecureApi}
        >
          View Bearer Token
        </Button>
      </Box>

      {accessToken && (
        <Box className={classes.result}>
          <Typography variant="h6" className="muted">
            Result
          </Typography>
          <Typography nowrap variant="body1">
            {accessToken}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
