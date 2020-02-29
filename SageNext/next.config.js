const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withSass(
    {
        env: {
            back: 'http://127.0.0.1:3000',
        },
    }
);
