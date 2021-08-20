import React from "react";
import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import Layout from "../components/Layout";
import setInitTheme from "../hooks/setInitTheme";
import { NavLink } from "../components/NavLink";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS } from "../components/types";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import CircleOutlinedIcon from "@material-ui/icons/CircleOutlined";

const useStyles = makeStyles((theme) => ({
  github: {
    backgroundColor: "black",
    color: "white",
  },
  linkedIn: {
    backgroundColor: "#0A66C2",
    color: "white",
  },
  email: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  inactiveLink: {
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
}));

const StyledButton = withStyles((theme) => ({
  root: { width: "150px" },
}))((props) => <Button variant="contained" {...props} />);

const Contact = ({ initialAppTheme }) => {
  const classes = useStyles();
  setInitTheme(initialAppTheme);

  return (
    <Layout>
      <Box>
        <Typography variant="h3" gutterBottom>
          Contact me!
        </Typography>
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Grid item>
            <StyledButton
              href="https://www.linkedin.com/in/jonathan-gutierrez-b9412357/"
              className={classes.linkedIn}
              startIcon={<AiFillLinkedin size={30} />}
            >
              <Typography variant="button" display="block">
                LinkedIn
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton
              href="https://www.github.com/jonnyg23"
              className={classes.github}
              startIcon={<AiOutlineGithub size={30} />}
            >
              <Typography variant="button" display="block">
                Github
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton
              href="mailto:jonguti23@outlook.com?subject=Inquiry for Jonathan"
              className={classes.email}
              startIcon={<AiOutlineMail size={30} />}
            >
              <Typography variant="button" display="block">
                Email
              </Typography>
            </StyledButton>
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
