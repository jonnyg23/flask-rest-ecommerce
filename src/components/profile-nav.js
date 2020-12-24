import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
  ) : null;
};

export default ProfileNav;
