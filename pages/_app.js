import '../styles/globals.css';
import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Box } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import defaultTheme from "../themes/default";
import darkTheme from "../themes/dark";
import { NavBar, Loading } from "../components";
import ThemeModeContext from "../context/ThemeModeContext";
import ThemeModeProvider from "../context/ThemeModeProvider";
import Auth0ProviderWithHistory from "../auth/auth0-provider-with-history";

const useStyles = makeStyles((theme) => ({
  lightBox: {
    backgroundColor: theme.palette.grey["A200"],
  },
  darkBox: {
    backgroundColor: "white",
  },
}));

const App = ({ Component, pageProps }) => {
  const classes = useStyles();
  const { isLoading } = useAuth0();
  const context = useContext(ThemeModeContext);
  const theme = context.darkMode ? darkTheme : defaultTheme;

  // const isDarkMode = (contextTheme) => {
  //   return (
  //     {contextTheme.darkMode !== true ? }
  //   )
  // };

  return (
    <ThemeModeProvider>
      <Auth0ProviderWithHistory>
        <ThemeProvider theme={theme}>
          {typeof window === "undefined" ? null : (
            <Box
              id="app"
              className={context.darkMode ? classes.lightBox : classes.darkBox}
              pb={6}
              flexGrow={1}
              minHeight="100vh"
            >
              <NavBar />
              <Container>
                <Component {...pageProps} />
              </Container>
            </Box>
          )}
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </ThemeModeProvider>
  );
};

export default App;
