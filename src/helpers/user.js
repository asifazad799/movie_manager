const { User } = require("../models/dbSchema/user");

const addUser = async (userData) => {
  
  let res = await User.create({
    ...userData,
  });
  console.log(res,'ag');

  await res.save();
  
  return res;
};

const findUser = async (userData) => {
  return User?.findOne({ userId: userData?.userId });
};

module.exports = {
  addUser,
  findUser,
};
