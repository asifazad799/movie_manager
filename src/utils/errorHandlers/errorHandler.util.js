const { StatusCodes, getReasonPhrase } = require("http-status-codes");

const sendErrorResponse = (res, error) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    status: false,
    message:
      error.message ||
      getReasonPhrase(statusCode) ||
      getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  });
};

module.exports = {
  sendErrorResponse,
};
