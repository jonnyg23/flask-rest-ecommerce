import React from "react";
import { NavLink } from "../components/NavLink";
import { Typography } from "@material-ui/core";
import { useFetchUser } from "../hooks/user";

const ProfileNav = () => {
  const { user, loading } = useFetchUser();

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
