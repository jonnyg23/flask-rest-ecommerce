import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Layout from "../components/Layout";
import setInitTheme from "../hooks/setInitTheme";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_MAILTO, FRONTEND_URL } from "../components/types";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  github: {
    width: "150px",
    backgroundColor: "black",
    color: "white",
  },
  linkedIn: {
    width: "150px",
    backgroundColor: "#0A66C2",
    color: "white",
  },
  email: {
    width: "150px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Contact = ({ initialAppTheme }) => {
  const classes = useStyles();
  setInitTheme(initialAppTheme);

  return (
    <Layout
      title="Contact me!"
      description="Contact Me! | Ecommerce Website Template - Nextjs, Flask, & Material-ui"
      url={`${FRONTEND_URL}` + '/contact'}
    >
      <Typography variant="h3" color="textSecondary" gutterBottom>
        Contact me!
      </Typography>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            href={LINKEDIN_URL}
            className={classes.linkedIn}
            startIcon={<AiFillLinkedin size={30} />}
          >
            <Typography variant="button" display="block">
              LinkedIn
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            href={GITHUB_URL}
            className={classes.github}
            startIcon={<AiOutlineGithub size={30} />}
          >
            <Typography variant="button" display="block">
              Github
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            href={EMAIL_MAILTO}
            className={classes.email}
            startIcon={<AiOutlineMail size={30} />}
          >
            <Typography variant="button" display="block">
              Email
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;

export function getServerSideProps({ req }) {
  return {
    props: {
      initialAppTheme: req.cookies.appTheme || "light",
    },
  };
}
