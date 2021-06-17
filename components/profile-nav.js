import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ProfileNav = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <NavLink
      to="/profile"
      exact
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Typography>Profile</Typography>
    </NavLink>
  ) : null;
};

export default ProfileNav;
