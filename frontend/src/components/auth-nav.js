import React from "react";
import AuthenticationButton from "./authentication-button";
import ProfileNav from "./profile-nav";

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <ProfileNav />
    <AuthenticationButton />
  </div>
);

export default AuthNav;
