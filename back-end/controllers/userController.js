const { hashingPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const User = require("../models/user");

class Controller {
    static async getUsers(req, res, next) {
        try {
            const users = await User.query().select("id", "name", "email");
            res.status(200).json({ data: users });
        } catch (error) {
            next(error);
        }
    }

    static async postUsers(req, res, next) {
        const { name, email, password } = req.body;
        try {
            if (!name || !email || !password) next({ name: "empty-input", message: "please fill in the field" });
            const newUser = {
                name,
                email,
                password: hashingPassword(password),
            };

            const createUser = await User.query().insert(newUser);
            res.status(201).json({ status: "created", email: createUser.email });
        } catch (error) {
            next(error);
        }
    }

    static async userById(req, res, next) {
        const { id } = req.params;
        try {
            const user = await User.query().findById(id).select("name", "email", "role");
            if (!user) next({ name: "not-found", message: "user not found" });

            res.status(200).json({ data: user });
        } catch (error) {
            next(error);
        }
    }

    static async deletedUser(req, res, next) {
        const { id } = req.params;
        try {
            const user = await User.query().findById(id);
            if (!user) next({ name: "not-found", message: "user not found" });

            const userDeleted = await User.query().deleteById(id);
            if (userDeleted == 1) res.status(200).json({ status: "deleted", email: user.email });
        } catch (error) {
            next(error);
        }
    }

    static async postLogin(req, res, next) {
        const { email, password } = req.body;
        try {
            if (!email || !password) next({ name: "empty-input", message: "please fill in the field" });
            let user = await User.query().findOne({ email });

            if (!user) {
                next({ name: "invalid-input", message: "wrong email / password" });
            } else if (!comparePassword(password, user.password)) {
                next({ name: "invalid-input", message: "wrong email / password" });
            } else {
                let token = signToken({ email: user.email });
                res.status(200).json({
                    access_token: token,
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
