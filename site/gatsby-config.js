module.exports = {
  siteMetadata: {
    title: `Naga Chaitanya Konada`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@ChaituKNag`,
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
        name: `Naga - The Best Developer`,
        short_name: `Naga TBD`,
        start_url: `/`,
        background_color: `rgba(0, 95, 104, 1)`,
        theme_color: `rgba(0, 95, 104, 1)`,
        display: `minimal-ui`,
        icon: `src/images/naga-tbd-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `700`],
            display: `swap`,
          },
          {
            family: `Merriweather`,
            variants: [`400`],
            display: `swap`,
          },
          {
            family: `Raleway`,
            variants: [`400`, `600`],
            display: `swap`,
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`],
            display: `swap`,
          },
          {
            family: `Acme`,
            variants: [`400`],
            display: `swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
