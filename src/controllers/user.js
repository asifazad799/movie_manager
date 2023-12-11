const { userHelpers } = require("../helpers");

const login = async (req, res, next) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
    return;
  }
};

const signUp = async (req, res, next) => {
  try {
    await userHelpers.addUser(req.body);

    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, signUp };
