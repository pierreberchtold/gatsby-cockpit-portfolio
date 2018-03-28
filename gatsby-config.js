module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-cockpit`,
      options: {
        cockpitConfig: {
          baseURL: 'http://cockpit.portfolio.local', // the url to you cockpit installation
          accessToken: '6253b3ebb626ba3900d124422e6916', // you cockpit API key
        },
      },
    },
  ],
};
