export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.POSTGRES_USERNAME,
        port: parseInt(process.env.POSTGRES_PORT, 10) || 5432
    }
});
