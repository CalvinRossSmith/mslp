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
        openGraph: {
          type: 'website',
          url: 'https://www.meaghanslp.ca/',
          site_name: 'Meaghan Catton SLP',
          title: 'Meaghan Catton SLP',
          description: 'Meaghan Catton is a speech-language pathologist (SLP) offering therapy in the Northumberland, and Clarington.',
          locale: 'en_CA',
        },
        titleTemplate: '%s | Meaghan Catton SLP',
        language: 'en',
        description: 'Meaghan Catton is a speech-language pathologist (SLP) offering therapy in the Northumberland, and Clarington.',
        canonical: 'https://www.meaghanslp.ca/',
        metaTags: [
          {
            name: 'author',
            content: 'Meaghan Cattton',
          },
          {
            name: 'description',
            content: 'Meaghan Catton is a speech-language pathologist (SLP) offering therapy in the Northumberland, and Clarington.',
          },
        ],
      },
    },
  ],
};
