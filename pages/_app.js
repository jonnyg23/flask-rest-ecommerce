import "../styles/globals.css";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import Head from "next/head";
import { Provider as NextAuthProvider } from "next-auth/client";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import ThemeModeContext from "../context/ThemeModeContext";
import Auth0ProviderWithHistory from "../auth/auth0-provider-with-history";
import CustomThemeProvider from "../context/CustomThemeProvider";

export default function App({ Component, pageProps, initialAppTheme }) {
  const getLayout = Component.getLayout || ((page) => page);
  // const { isLoading } = useAuth0();
  const context = useContext(ThemeModeContext);

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
      <CustomThemeProvider>
        <Auth0ProviderWithHistory>
          <NextAuthProvider session={pageProps.session}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </NextAuthProvider>
        </Auth0ProviderWithHistory>
      </CustomThemeProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
