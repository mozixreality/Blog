module.exports = {
  pathPrefix: "/Blog",
  siteMetadata: {
    title: "Blog",
    author: 'mozixreality'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
        ]
      }
    }
  ],
};
