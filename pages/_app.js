import "../styles/globals.css";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

import { UserProvider } from "@auth0/nextjs-auth0";
import CustomThemeProvider, {
  CustomThemeContext,
} from "../context/CustomThemeProvider";

export default function App({ Component, pageProps }) {
  // const { isLoading } = useAuth0();
  const ThemeContext = useContext(CustomThemeContext);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UserProvider>
        <CustomThemeProvider initialAppTheme={ThemeContext.appTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </CustomThemeProvider>
      </UserProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
