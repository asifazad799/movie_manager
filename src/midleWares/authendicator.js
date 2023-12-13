const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  let token = req.headers?.authorization;
  if (token) {
    jwt.verify(token.split(" ")[1], process.env.KEY, (err, valid) => {
      if (err) {
        next(err);
      }
      if (valid) {
        next();
      }
    });
  } else {
    const error = new Error("please provide token");
    error.statusCode = 401;
    next(error);
  }
};

module.exports = {
  authenticateUser,
};
