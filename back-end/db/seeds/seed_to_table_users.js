/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("users").insert([
        {
            id: 1,
            name: "admin",
            email: "admin@voltest.com",
            password: "admin!123",
            role: "admin",
        },
    ]);
};
