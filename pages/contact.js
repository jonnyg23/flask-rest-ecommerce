import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import setInitTheme from "../hooks/setInitTheme";
import { NavLink } from "../components/NavLink";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS } from "../components/types";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  github: {
    backgroundColor: "black",
  },
  inactiveLink: {
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
}));

const Contact = ({ initialAppTheme }) => {
  const classes = useStyles();
  setInitTheme(initialAppTheme);

  return (
    <Layout>
      <Box>
        <Typography variant="h3" gutterBottom>
          Contact me!
        </Typography>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={1}>
            <IconButton href={EMAIL_ADDRESS}>
              <Box>
                <FaLinkedin size={30} color="#0A66C2" />
              </Box>
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="container"
              color="default"
              className={classes.github}
              startIcon={<AiOutlineGithub size={30} color="black" />}
            >
              Github
            </Button>
          </Grid>
          <Grid item xs={1}>
            <IconButton href={EMAIL_ADDRESS}>
              <Box>
                <AiOutlineGithub size={30} color="black" />
                Github
              </Box>
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton href={EMAIL_ADDRESS}>
              <Box>
                <AiOutlineMail size={30} color="#0A66C2" />
              </Box>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
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
