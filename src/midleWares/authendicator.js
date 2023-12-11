const authenticateUser = async (req, res, next) => {
  if (req?.body?.id) {
    next();
  } else {
    const error = new Error();
    error.statusCode = 401;
    next(error);
  }
  
};

module.exports = {
  authenticateUser,
};
