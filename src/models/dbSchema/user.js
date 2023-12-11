const mongoose = require("mongoose");

const User = mongoose.model("User", {
  userId: { type: String, unique: true },
  password: { type: Number },
});

module.exports = {
  User,
};
