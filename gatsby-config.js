console.log(
  'Asking for the following file for keys and tokens: ',
  `.env.${process.env.NODE_ENV}`
)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log('Contentful space ID: ', process.env.GATSBY_CONTENTFUL_SPACE_ID)
console.log(
  'Contentful space Token: ',
  process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
)
console.log('Contentful environment: ', process.env.GATSBY_CONTENTFUL_ENV)

const contentfulConfig = {
  spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.GATSBY_CONTENTFUL_ENV || 'development',
}

module.exports = {
  // siteMetadata: {
  //   title: `Tribalscale`,
  //   description: `Tribalscale marketing site`,
  //   author: `@tribalscale`,
  //   siteUrl: 'default url',
  // },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `900`],
            subsets: [`latin`],
          },
          {
            family: `Merriweather`,
            variants: [`900`],
            subsets: [`latin`],
          },
        ],
      },
    },
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
        name: 'Tribalscale',
        short_name: 'Tribalscale',
        start_url: '/',
        // TODO: Get correct colours and icon
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'default url',
        sitemap: 'default url-sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 41390,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TOKEN,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
}
