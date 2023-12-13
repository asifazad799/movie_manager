const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userMovieListSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: "User", unique: true },
    movieList: [
      {
        movieId: { type: ObjectId, ref: "Movie", },
        watched: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

const UserMovieList = mongoose.model("UserMovieList", userMovieListSchema);

module.exports = {
  UserMovieList,
};
