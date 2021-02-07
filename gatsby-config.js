module.exports = {
  pathPrefix: "/Blog",
  siteMetadata: {
    title: "Blog",
    author: 'Mozix Reality'
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
    'gatsby-transformer-remark'
  ],
};
