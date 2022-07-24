/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { hashingPassword } = require("../../helpers/bcrypt");
exports.seed = async function (knex) {
    await knex("users").insert([
        {
            id: 1,
            name: "admin",
            email: "admin@voltest.com",
            password: hashingPassword("admin!123"),
            role: "admin",
        },
    ]);
};
