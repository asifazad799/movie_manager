const { userHelpers } = require("../helpers");
const generateToken = require("../utils/jwt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    let user = await userHelpers?.findUser(req?.body);

    if (user == null) {
      throw { message: "user not found", statusCode: 404 };
    }

    let token = generateToken(user?.userId);

    return res.status(200).json({
      message: "success",
      user: user,
      token: token,
      expiry: jwt.verify(token, process.env.KEY).exp,
    });
  } catch (error) {
    next(error);
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
