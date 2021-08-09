import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";

import { useSession, signIn, signOut } from "next-auth/client";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const [session, loading] = useSession();

  //return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  return (
    <main>
      {!session && <h1>SIGNED IN</h1>}
      {session && <h1>SIGNED OUT</h1>}
    </main>
  );
};

export default AuthenticationButton;
