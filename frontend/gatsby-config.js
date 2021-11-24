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
        collectionTypes: [`timeline`]
      },
    },
  ],
}
