import React from "react";
import { Box, Typography, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { teal } from "@material-ui/core/colors";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "./types";
import { FiLinkedin } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    padding: "1em 0",
  },
  copyrightName: {
    color: teal["A700"],
    marginRight: 6,
  },
  copyrightYear: {
    color: theme.palette.secondary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container justifyContent="center">
        <Grid item>
          <IconButton href={GITHUB_URL} color="inherit">
            <Box display="flex" border={2} borderRadius={50} p={0.5}>
              <FaGithub size={30} />
            </Box>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href={INSTAGRAM_URL} color="inherit">
            <Box display="flex" border={2} borderRadius={50} p={0.5}>
              <FaInstagram size={30} />
            </Box>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href={LINKEDIN_URL} color="inherit">
            <Box display="flex" border={2} borderRadius={50} p={0.5}>
              <FiLinkedin size={30} />
            </Box>
          </IconButton>
        </Grid>
      </Grid>

      <Box display="flex" flexDirection="row" mt={2} justifyContent="center">
        <Typography variant="body1" className={classes.copyrightName}>
          Jonathan Gutierrez
        </Typography>
        <Typography variant="body1" className={classes.copyrightYear}>
          © 2021
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
