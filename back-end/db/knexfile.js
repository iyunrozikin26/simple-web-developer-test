// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    test: {
        client: "postgresql",
        connection: {
            database: "gradiwa_testing",
            user: "postgres",
            password: "postgres",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
        },
        ...knexSnakeCaseMappers,
    },
    development: {
        client: "postgresql",
        connection: {
            database: "gradiwa_test",
            user: "postgres",
            password: "postgres",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
        },
        ...knexSnakeCaseMappers,
    },
};
