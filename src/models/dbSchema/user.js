const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true },
    password: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

// const User = mongoose.model(
//   "User",
//   {
//     userId: { type: String, unique: true },
//     password: { type: Number },
//   },
//   {
//     timestamps: true,
//   }
// );

module.exports = {
  User,
};
