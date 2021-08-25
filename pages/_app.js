import "../styles/globals.css";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import * as gtag from "../hooks/gtag";

import { UserProvider } from "@auth0/nextjs-auth0";
import CustomThemeProvider, {
  CustomThemeContext,
} from "../context/CustomThemeProvider";

export default function App({ Component, pageProps }) {
  // Add Google analytics functionality
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routerChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Use CustomThemeContext for initialAppTheme prop
  const ThemeContext = useContext(CustomThemeContext);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
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
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
