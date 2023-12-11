const { User } = require("../models/dbSchema/user");

const addUser = async (userData) => {
  let user = new User({
    ...userData,
  });

  return user.save();
};

const findUser = async (userData) => {
  return User?.findOne({ userId: userData?.userId });
};

module.exports = {
  addUser,
  findUser,
};
