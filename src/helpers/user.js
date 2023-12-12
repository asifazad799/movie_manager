const { User } = require("../models/dbSchema/user");

const addUser = async (userData) => {
  let res = await User.create({
    ...userData,
  });
  await res.save();
  return res;
};

const findUser = async (userData) => {
  return await User?.findOne({ userId: userData?.userId });
};

module.exports = {
  addUser,
  findUser,
};
