/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://politix-strapi.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`timeline`,`categories`,`article`]
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://politix-strapi.herokuapp.com/graphql'
      }
    }
  ],
}
