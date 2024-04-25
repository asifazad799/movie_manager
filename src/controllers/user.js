const jwt = require("jsonwebtoken");

const { userHelpers } = require("../helpers");

const { sendErrorResponse } = require("../utils/errorHandlers");
const generateToken = require("../utils/jwt");

const login = async (req, res) => {
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
    sendErrorResponse(res, error);
  }
};

const signUp = async (req, res) => {
  try {
    await userHelpers.addUser(req.body);

    res.status(200).json({ message: "success" });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = { login, signUp };
