//// Configurations for the site

module.exports = {
    //! Site Meta Data
    siteMetadata: {
        title: "Modern interior",
        description: `A starter template for Gatsby.js projects`,
        content: `A full-Service residential & <br /> commercial interior design and staging company offering professional organizing & eco-services.`,
        author: `Rahi Khan`,
        siteUrl: `https://interior-consultant69.netlify.app/`,
    },

    //! External Gatsby Plugins
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-transformer-sharp",
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: "Crimson Pro",
                        variable: true,
                        weights: ["200"],
                    },
                    {
                        family: "Montserrat",
                        weights: ["300..700"],
                    },
                    {
                        family: "Lora",
                        variable: true,
                        weights: ["400, 700"],
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },

        //! "Offline-plugin" will always be after "Manifest-plugin"
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Modern interior`,
                short_name: `Modern interior`,
                description: `Modern interior`,
                lang: `en`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                display: `standalone`,
                icon: `./src/images/devchallenges.png`,
            },
        },
        "gatsby-plugin-offline",
    ],
};
