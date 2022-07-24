const { hashingPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
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
                password: hashingPassword(password),
            };

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

    static async deletedUser(req, res, next) {
        const { id } = req.params;
        try {
            const user = await User.query().findById(id);
            if (!user) throw { name: "not-found", message: "user not found" };

            const userDeleted = await User.query().deleteById(id);
            if (userDeleted == 1) res.status(200).json({ status: "deleted", email: user.email });
        } catch (error) {
            console.log(error);
        }
    }

    static async postLogin(req, res, next) {
        const { email, password } = req.body;
        try {
            if (!email || !password) throw { name: "empty-input", message: "please fill in the field" };
            let user = await User.query().findOne({ email });

            if (!user) {
                throw { name: "invalid-input", message: "wrong email / password" };
            } else if (!comparePassword(password, user.password)) {
                throw { name: "invalid-input", message: "wrong email / password" };
            } else {
                let token = signToken({ email: user.email });
                res.status(200).json({
                    access_token: token,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Controller;
