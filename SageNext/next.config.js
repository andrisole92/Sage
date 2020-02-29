const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withSass(
    {
        serverRuntimeConfig: {
            secondSecret: process.env.SECOND_SECRET
        },
        publicRuntimeConfig: {
            BACKEND: process.env.BACKEND || 'http://127.0.0.1:3000',
            HOST: process.env.HOST || 'http://127.0.0.1:3000',
        },
    }
);
