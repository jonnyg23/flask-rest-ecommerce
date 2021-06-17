import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Box } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import defaultTheme from "./themes/default";
import darkTheme from "./themes/dark";
import { NavBar, Loading } from "./components";
import Footer from "./components/Footer";
import ThemeModeContext from "./context/ThemeModeContext";
import { Home, Contact, Products, Profile } from "./views";
import ProtectedRoute from "./auth/protected-route";

const useStyles = makeStyles((theme) => ({
  lightBox: {
    backgroundColor: theme.palette.grey["A200"],
  },
  darkBox: {
    backgroundColor: "white",
  },
}));

const App = () => {
  const classes = useStyles();
  const { isLoading } = useAuth0();
  const context = useContext(ThemeModeContext);
  const theme = context.darkMode ? darkTheme : defaultTheme;

  if (isLoading) {
    return <Loading />;
  }

  // const isDarkMode = (contextTheme) => {
  //   return (
  //     {contextTheme.darkMode !== true ? }
  //   )
  // };

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="app"
        className={context.darkMode ? classes.lightBox : classes.darkBox}
        pb={6}
        flexGrow={1}
        minHeight="100vh"
      >
        <NavBar />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/collections" exact component={Products} />
            <Route path="/contact" exact component={Contact} />
            <ProtectedRoute path="/profile" component={Profile} />
          </Switch>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
