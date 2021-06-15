import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeModeProvider from './context/ThemeModeProvider';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

import "./index.css";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Router>
    <ThemeModeProvider>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </ThemeModeProvider>
  </Router>,
  document.getElementById("root")
);
