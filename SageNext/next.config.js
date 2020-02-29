const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withSass(
    {
        serverRuntimeConfig: {
            secondSecret: process.env.SECOND_SECRET
        },
        publicRuntimeConfig: {
            BACKEND: process.env.BACKEND || 'http://159.203.2.190:3000',
            HOST: process.env.HOST || 'http://159.203.2.190:3000',
        },
    }
);
