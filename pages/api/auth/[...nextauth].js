import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
      clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
    }),
  ],
});