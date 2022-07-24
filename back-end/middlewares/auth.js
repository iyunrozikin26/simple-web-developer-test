const { verifyToken } = require("../helpers/jwt");
const User = require("../models/user");

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) throw { name: "invalid--token", message: "invalid token" };

        let payload = verifyToken(access_token);
        let user = await User.query().findOne({ email: payload.email });

        if (!user) throw { name: "invalid--token", message: "invalid token" };
        req.user = { email: payload.email, role: user.role };
        next();
    } catch (error) {
        console.error(error);
    }
};

const authorization = async (req, res, next) => {
    console.log(req.user);
    try {
        if (req.user.role == "admin") next();
        else throw { name: "forbidden-access", message: "not allowed access" };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    authentication,
    authorization,
};
