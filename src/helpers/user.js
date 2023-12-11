const { User } = require("../models/dbSchema/user");

const addUser = async (userData) => {
  let user = new User({
    ...userData,
  });

  return user.save();
};

module.exports = {
  addUser,
};
