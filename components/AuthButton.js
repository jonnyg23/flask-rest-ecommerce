import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthButton = () => {
  const { user, error, isLoading } = useUser();

  return user ? (
    <LogoutButton user={user} loading={isLoading} />
  ) : (
    <LoginButton user={user} loading={isLoading} />
  );
};

export default AuthButton;
