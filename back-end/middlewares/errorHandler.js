module.exports = (err, req, res, next) => {
    let errorStatus = err.status || 500;
    let msgError = err.message;

    if (err.name === "UniqueViolationError") {
        msgError = "your email already exists";
    }
    if (err.name === "empty-input") {
        errorStatus = 400;
    }
    if (err.name === "not-found") {
        errorStatus = 404;
    }
    if (err.name === "invalid-input" || err.name === "invalid-token") {
        errorStatus = 401;
    }
    if (err.name === "forbidden-access") {
        errorStatus = 403;
    }

    res.status(errorStatus).json({
        status: errorStatus,
        message: msgError,
    });
};
