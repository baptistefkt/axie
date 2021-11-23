module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "axie",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "@chakra-ui/gatsby-plugin"
  ],
};
