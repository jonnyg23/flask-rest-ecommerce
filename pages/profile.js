import React, { useState} from "react";
import auth0 from "../hooks/auth0";
import { WithPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import setInitTheme from "../hooks/setInitTheme";
import { Box, Typography, Paper, Avatar } from "@material-ui/core";
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

const Profile = ({ initialAppTheme, user }) => {
  setInitTheme(initialAppTheme);
  const classes = useStyles();
  const [bearer_token, getBearerToken] = useState("");

  // useEffect(() => {
  //   getBearerToken(document.cookie);
  // }, []);

  return (
    <>
      <WithPageAuthRequired>
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
              <Typography variant="body1">{user.nickname}</Typography>
            </Box>

            <Paper elevation={3}>
              <Box padding={2}>
                {/* <JSONPretty
                  id="user-bearer-token"
                  data={bearer_token}
                  style={{
                    overflow: "auto",
                  }}
                ></JSONPretty> */}
              </Box>
            </Paper>

            <Box mt={3} mb={1}>
              <Typography variant="body1">
                Click below to view your unique Bearer JWT Access Token:
              </Typography>
            </Box>
            {/* <Box mb={2}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={showToken}
              >
                View Bearer Token
              </Button>
            </Box> */}
            {/* {bearer_token && (
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
      </WithPageAuthRequired>
    </>
  );
};

export default Profile;

export async function getServerSideProps({ req, res }) {
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const session = await auth0.getSession(req, res);
  console.log("WE GOT SESSION", session.user);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/auth/login",
    });
    res.end();
    return;
  }

  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light",
      user: session.user,
    },
  };
}
