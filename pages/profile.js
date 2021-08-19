import React from "react";
import Link from "next/link";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import setInitTheme from "../hooks/setInitTheme";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import JSONPretty from "react-json-pretty";
import Layout from "../components/Layout";

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

const Profile = ({ initialAppTheme }) => {
  setInitTheme(initialAppTheme);
  const classes = useStyles();

  const { user, error, isLoading } = useUser();

  if (isLoading)
    return (
      <>
        <Layout></Layout>
        <CircularProgress color="primary" />
      </>
    );

  if (error) return <div>{error.message}</div>;

  if (!user)
    return (
      <Link href="/api/auth/login">
        <a>Login</a>
      </Link>
    );

  return (
    <>
      <Layout>
        <Box>
          {user.picture ? (
            <div className={classes.image}>
              <Avatar
                variant="circle"
                alt="Profile"
                src={user.picture}
                className={classes.large}
              />
            </div>
          ) : null}
          <Box mb={3}>
            <Typography variant="h2">{user.name}</Typography>
            <Typography variant="body1">Nickname: {user.nickname}</Typography>
          </Box>

          {/* <Paper elevation={3}>
            <Box padding={2}>
              <JSONPretty
                  id="user-bearer-token"
                  data={bearer_token}
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
                onClick={showToken}
              >
                View Bearer Token
              </Button>
            </Box>
          {bearer_token && (
              <Box className={classes.result}>
                <Typography variant="h6" className="muted">
                  Result
                </Typography>
                <Typography nowrap variant="body1">
                  {bearer_token}
                </Typography>
              </Box>
            )} */}
        </Box>
      </Layout>
    </>
  );
};

export default withPageAuthRequired(Profile);

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light",
    },
  };
}
