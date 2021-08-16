import React, { useState } from "react";
import { useFetchUser } from "../hooks/user";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { NavLink } from "../components/NavLink";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import { teal } from "@material-ui/core/colors";
import AuthenticationButton from "./authentication-button";
import ThemeModeToggle from "./ThemeModeToggle";

// This StyledMenu is the style for the menu content box
const StyledMenu = withStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    border: "0px solid #FCF0F0",
    borderRadius: 10,
  },
}))((props) => (
  <Menu
    elevation={2}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

// This StyledMenuItem is the style for the menu's items
const StyledMenuItem = withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      display: "flex",
      width: "100%",
      backgroundColor: teal[400],
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

// Bottom Menu Items styling
const BottomMenuItem = withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    "&:hover": {
      display: "flex",
      width: "100%",
      backgroundColor: "transparent",
    },
  },
}))(MenuItem);

// This 'useStyles' is for the style of the hamburger menu button
// This style is triggered with 'classes.root'
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ffff",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
    },
    borderRadius: 30,
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
  },
  link: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    textTransform: "none",
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  menuIcon: {
    color: theme.palette.primary.contrastText,
  },
  subIcons: {
    color: theme.palette.grey[500],
  },
}));

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, loading } = useFetchUser();

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className={classes.root}
        onClick={handleClick}
      >
        <MenuIcon className={classes.menuIcon} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* Home Link */}
        <NavLink exact className={classes.link} href="/">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <HomeIcon fontSize="medium" className={classes.subIcons} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </StyledMenuItem>
        </NavLink>

        {/* Products Link */}
        <NavLink exact className={classes.link} href="/products">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <ShoppingBasketIcon
                fontSize="medium"
                className={classes.subIcons}
              />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </StyledMenuItem>
        </NavLink>

        {/* Contact Link */}
        <NavLink exact className={classes.link} href="/contact">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <MailIcon fontSize="medium" className={classes.subIcons} />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </StyledMenuItem>
        </NavLink>

        {/* Profile Link (If Authenticated) */}
        {user ? (
          <NavLink exact className={classes.link} href="/profile">
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>
          </NavLink>
        ) : null}

        {/* Login & Theme Toggle */}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <BottomMenuItem onClick={handleClose}>
              <AuthenticationButton />
            </BottomMenuItem>
          </Grid>
          <Grid item xs={6}>
            <BottomMenuItem onClick={handleClose}>
              <ThemeModeToggle fontSize="large" />
            </BottomMenuItem>
          </Grid>
        </Grid>
      </StyledMenu>
    </>
  );
}
