module.exports = {
    siteMetadata: {
        title: 'Capricorn Investment Group',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'https://capricorn-cms.herokuapp.com',
                contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
                    'generalSettings',
                    'homePage',
                    'aboutPage',
                    'groupPage',
                    'partner',
                    'partnerpage',
                    'contact',
                    'goalsandvalue',
                    'teamMember',
                    'technicalPage',
                ]
            },
        },
    ],
};