// const Dotenv = require("dotenv-webpack");

// module.exports = {
//   reactStrictMode: true,
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Add the new plugin to the existing webpack plugins
//     config.plugins.push(new Dotenv({ silent: true }));

//     return config;
//   },
//   // Have to list all the environment variables used here to make it available
//   // to the client code
//   env: {
//     NEXT_PUBLIC_AUTH0_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
//     NEXT_PUBLIC_AUTH0_SCOPE: process.env.NEXT_PUBLIC_AUTH0_SCOPE,
//     NEXT_PUBLIC_AUTH0_DOMAIN: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
//     NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
//     NEXT_PUBLIC_REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
//     NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI:
//       process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI,
//     BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL,
//     AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
//     SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
//     SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
//     NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
//   },
// };
module.exports = {
  distDir: 'build',
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_AUTH0_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    NEXT_PUBLIC_AUTH0_SCOPE: process.env.NEXT_PUBLIC_AUTH0_SCOPE,
    NEXT_PUBLIC_AUTH0_DOMAIN: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
    NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI:
      process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI,
    BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
  },
};
