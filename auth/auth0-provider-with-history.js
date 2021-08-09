import React from "react";
import Router from "next/router";
import { Auth0Provider } from "@auth0/auth0-react";

const onRedirectCallback = (appState) => {
  Router.replace(appState?.returnTo || '/');
};

const Auth0ProviderWithHistory = ({ children }) => {

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
