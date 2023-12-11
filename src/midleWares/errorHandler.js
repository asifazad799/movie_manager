const { errorHandling } = require("../utils/errorHandlers");

const errorHandler = (error, req, res, next) => {
    console.log(res,'hhhh');
  errorHandling?.sendErrorResponse(res, error);
};

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404
  next(error);
};

module.exports = {
  errorHandler,
  notFound,
};
