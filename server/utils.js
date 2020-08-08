/**
 * Logging Middleware.
 * @param req
 * @param res
 * @param next
 */
const logRequest = (req, res, next) => {
    console.log(req.body);
    next();
};

module.exports = {logRequest};
