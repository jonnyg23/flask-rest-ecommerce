import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: Fix redirectUri instead of {window.location.origin} and 
// Log In button doesn't navigate to domain, but to Undefined

const Auth0ProviderWithHistory = ({ children }) => {
  
  useEffect(() => {
    const windowPath = window.location.pathname
  }, [])

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  
  const onRedirectCallback = (appState) => {
    Router.push(appState?.returnTo || windowPath);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={serverUrl}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
