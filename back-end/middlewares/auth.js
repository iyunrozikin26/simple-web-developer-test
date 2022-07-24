const { verifyToken } = require("../helpers/jwt");
const User = require("../models/user");

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) next ({ name: "invalid-token", message: "invalid token" });

        let payload = verifyToken(access_token);
        let user = await User.query().findOne({ email: payload.email });

        if (!user) next ({ name: "invalid--token", message: "invalid token" });
        req.user = { email: payload.email, role: user.role };
        next();
    } catch (error) {
        next(error)
    }
};

const authorization = async (req, res, next) => {
    try {
        if (req.user.role == "admin") next();
        else next ({ name: "forbidden-access", message: "not allowed access" });
    } catch (error) {
        next(error)
    }
};

module.exports = {
    authentication,
    authorization,
};
