import React from "react";
import { useFetchUser } from "../hooks/user";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const AuthenticationButton = () => {
  const { user, loading } = useFetchUser();

  return user ? (
    <LogoutButton user={user} loading={loading} />
  ) : (
    <LoginButton user={user} loading={loading} />
  );
  // return (
  //   <main>
  //     {!session && <h1>SIGNED IN</h1>}
  //     {session && <h1>SIGNED OUT</h1>}
  //   </main>
  // );
};

export default AuthenticationButton;
