import React from "react";
import { Box, Typography, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
  },
  text: {
    color: theme.palette.primary.contrastText,
  },
  icons: {
    color: theme.palette.primary.contrastText,
  },
  iconBox: {
    borderColor: theme.palette.primary.contrastText,
  },
  copyrightName: {
    color: teal[400],
    marginRight: 6,
  },
  copyrightYear: {
    color: theme.palette.secondary.main
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box p={0} className={classes.root}>
      <Box textAlign="center" p={4} className={classes.root}>
        <Box mb={1} justifyContent="center">
          <Grid container className={classes.root} justify="center">
            <Grid container item xs={12} justify="center" spacing={3}>
              <IconButton href="">
                <Box
                  display="flex"
                  border={2}
                  borderRadius={50}
                  p={0.5}
                  className={classes.iconBox}
                >
                  <FaGithub size={30} className={classes.icons} />
                </Box>
              </IconButton>
              <IconButton href="">
                <Box
                  display="flex"
                  border={2}
                  borderRadius={50}
                  p={0.5}
                  className={classes.iconBox}
                >
                  <FaInstagram size={30} className={classes.icons} />
                </Box>
              </IconButton>
              <IconButton href="">
                <Box
                  display="flex"
                  border={2}
                  borderRadius={50}
                  p={0.5}
                  className={classes.iconBox}
                >
                  <FiFacebook size={30} className={classes.icons} />
                </Box>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" flexDirection="row" mt={2} justifyContent="center">
          <Typography variant="body1" className={classes.copyrightName}>
            Jonathan Gutierrez
          </Typography>
          <Typography variant="body1" className={classes.copyrightYear}>
            © 2021
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
