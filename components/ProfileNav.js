import React from "react";
import { NavLink } from "./NavLink";
import { Typography } from "@material-ui/core";
import { useUser } from "@auth0/nextjs-auth0";

const ProfileNav = () => {
  const { user, error, isLoading } = useUser();

  return user ? (
    <NavLink
      href="/profile"
      exact
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Typography>Profile</Typography>
    </NavLink>
  ) : null;
};

export default ProfileNav;
