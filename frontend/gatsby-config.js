require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Niclas Zellerhoff`,
    // Default title of the page
    siteTitleAlt: `niclaszll`,
    // Can be used for e.g. JSONLD
    siteHeadline: `niclaszll`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://niclaszll.de`,
    // Used for SEO
    siteDescription: `Small blog by Niclas Zellerhoff.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Twitter Handle
    author: `niclaszll`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/niclas-zellerhoff/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/niclaszll`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `niclaszll.de`,
        short_name: `niclaszll.de`,
        description: `Small blog by Niclas Zellerhoff.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ].filter(Boolean),
}
