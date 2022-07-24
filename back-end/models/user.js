const { Model } = require("objection");
const { hashingPassword } = require("../helpers/bcrypt");

class User extends Model {
    static get tableName() {
        return "users";
    }
}

module.exports = User;
