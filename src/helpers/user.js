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

const updateUserMovieListId = async (usrData) => {
  return await User?.updateOne(
    { _id: usrData?.userId },
    { movieListId: usrData?.movieListId }
  );
};

module.exports = {
  addUser,
  findUser,
  updateUserMovieListId,
};
