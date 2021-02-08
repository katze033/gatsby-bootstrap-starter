const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "Josh Katzenmeyer",
    titleTemplate: "Josh Katzenmeyer",
    description:
      "Minneapolis-based creative technologist offering limited edition generative artworks, commissions, and web development services.",
    url: "https://www.joshkatzenmeyer.com", // No trailing slash allowed!
    image: "/static/favicon.ico", // Path to your image you placed in the 'static' folder
    twitterUsername: "@luxpris",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
