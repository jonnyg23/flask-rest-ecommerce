import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { NoSsr } from "@material-ui/unstyled";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(10),
  },
}));

const Layout = ({ children, title, description, ogImage, url }) => {
  // Website URL
  const pageUrl = "http://localhost:3000";
  // When you share this page on Facebook, you will see this image
  const ogImg = "https://i.imgur.com/1H2TK2B.png";

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "Template - Next.js and Material-UI with Header & Footer"}
        </title>
        <meta
          name="description"
          key="description"
          content={
            description
              ? description
              : "This is a Template using Next.js and Material-UI with Header and Footer."
          }
        />
        <meta
          property="og:title"
          content={
            title
              ? title
              : "Template - Next.js and Material-UI with Header and Footer"
          }
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "This is a Template using Next.js and Material-UI with Header and Footer."
          }
          key="og:description"
        />
      </Head>
      <NavBar></NavBar>
      <main>
        <Container className={classes.container}>{children}</Container>
      </main>
      <NoSsr>
        <Footer />
      </NoSsr>
      <style jsx global>
        {`
          html,
          body {
            // background: #f9f9f9;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
