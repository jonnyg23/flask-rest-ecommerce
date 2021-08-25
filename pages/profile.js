import React from "react";
import Link from "next/link";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import setInitTheme from "../hooks/setInitTheme";
import { Box, Typography, Avatar, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { teal } from "@material-ui/core/colors";
import Layout from "../components/Layout";
import { FRONTEND_URL } from "../components/types";

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
    backgroundColor: teal["A700"],
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
      <Layout>
        <CircularProgress color="primary" />
      </Layout>
    );

  if (error) return <div>{error.message}</div>;

  if (!user)
    return (
      <Link href="/api/auth/login">
        <a>Login</a>
      </Link>
    );

  return (
    <Layout
      title="Profile | Ecommerce Website Template - Nextjs, Flask, & Material-ui"
      description="My Account - About Me"
      url={`${FRONTEND_URL}` + "/profile"}
    >
      <Typography variant="h3" color="textSecondary" gutterBottom>
        Profile
      </Typography>
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
      </Box>
    </Layout>
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
