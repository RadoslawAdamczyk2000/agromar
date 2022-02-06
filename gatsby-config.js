module.exports = {
  siteMetadata: {
      title: `Agromar`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      "gatsby-plugin-styled-components", 
      `gatsby-plugin-typescript`,
      "gatsby-plugin-image", 
      "gatsby-plugin-react-helmet", 
      "gatsby-plugin-sitemap", 
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/assets/logo.png"
        }
      }, 
      "gatsby-plugin-sharp", 
      "gatsby-transformer-sharp", 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "assets",
          "path": "./src/assets/"
        },
      },
      {
        resolve: `gatsby-source-datocms`,
        options: {
          apiToken: `9db86f8fb614ba8eb5182dde80f799`,
          environment: `main`,
        },
      },
  ]
};