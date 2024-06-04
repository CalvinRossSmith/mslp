module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://www.meaghanslp.ca/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Meaghan Catton SLP", // Used in manifest.json
          shortName: "MeaghanCattonSLP", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',      
      options: {
        titleTemplate: '%s | Meaghan SLP | Cobourg | Port Hope | Northumberland',
        language: 'en',
        description: 'Meaghan, a Registered SLP in Northumberland, offers comprehensive speech therapy services, including assessments, to children in Cobourg, Port Hope, and nearby areas.',
        metaTags: [
          {
            name: 'author',
            content: 'Meaghan Cattton',
          },
        ],
      },
    },
  ],
};
