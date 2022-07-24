const User = require("../models/user");

class Controller {
    static async getUsers(req, res, next) {
        try {
            const users = await User.query();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    static async postUsers(req, res, next) {
        const { name, email, password } = req.body;
        try {
            const newUser = {
                name,
                email,
                password,
            };
            console.log(newUser);
            const createUser = await User.query().insert(newUser);
            res.status(201).json(createUser);
        } catch (error) {
            console.log(error);
        }
    }

    static async userById(req, res, next) {
        const { id } = req.params;
        try {
            const user = await User.query().findById(id);
            if (!user) throw { name: "not-found", message: "user not found" };
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

module.exports = Controller;
