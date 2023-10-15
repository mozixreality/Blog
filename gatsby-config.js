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
    }, {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-QZM9FJCSM8", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
};
