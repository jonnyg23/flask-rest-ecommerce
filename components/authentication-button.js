import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const AuthenticationButton = () => {
  const { user, error, isLoading } = useUser();

  return user ? (
    <LogoutButton user={user} loading={isLoading} />
  ) : (
    <LoginButton user={user} loading={isLoading} />
  );
};

export default AuthenticationButton;
