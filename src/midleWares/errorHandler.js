const { errorHandling } = require("../utils/errorHandlers");

const errorHandler = (error, req, res, next) => {
  errorHandling?.sendErrorResponse(res, error);
};

const notFound = (req, res, next) => {
  const error = new Error();
  error.statusCode = 404;
  next(error);
};

module.exports = {
  errorHandler,
  notFound,
};
