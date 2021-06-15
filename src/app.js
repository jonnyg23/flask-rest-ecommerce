import React, { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Container } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import defaultTheme from "./themes/default";
import darkTheme from "./themes/dark";
import { NavBar, Loading } from "./components";
import ThemeModeContext from "./context/ThemeModeContext";
import { Home, Contact, Products, Profile } from "./views";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  const { isLoading } = useAuth0();
  const context = useContext(ThemeModeContext);
  const theme = context.darkMode ? darkTheme : defaultTheme;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <NavBar />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/collections" exact component={Products} />
            <Route path="/contact" exact component={Contact} />
            <ProtectedRoute path="/profile" component={Profile} />
          </Switch>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
