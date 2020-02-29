const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withSass(
    {
        env: {
            BACKEND: process.env.BACKEND || 'http://localhost:3000',
        },
    }
);
