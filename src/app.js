import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Loading } from "./components";
import { Home, Contact, Products, Profile } from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collections" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
