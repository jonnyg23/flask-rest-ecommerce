import { NavLink } from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/collections"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Products
    </NavLink>
    <NavLink
      to="/contact"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Contact Us
    </NavLink>
  </div>
);

export default MainNav;
