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
                    'generalsettings',
                    'homepages',
                    'aboutpages',
                    'grouppages',
                    'partners',
                    'partnerpages',
                    'contacts',
                    'goalsandvalues',
                    'teammembers',
                    'technicalpages',
                ]
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                filetypes: {
                    '.modules.css': { syntax: 'postcss-scss' },
                },
                cssLoaderOptions: {
                    localIdentName: '[hash:base64:5]'
                },
            },
        },
    ],
};