const { userHelpers } = require("../helpers");
const generateToken = require("../utils/jwt");

const login = async (req, res, next) => {
  try {
    let user = await userHelpers?.findUser(req?.body);
    console.log(user);

    if (user == null) {
      throw { message: "user not found", statusCode: 404 };
    }

    return res.status(200).json({
      message: "success",
      user: user,
      token: generateToken(user?.userId),
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
