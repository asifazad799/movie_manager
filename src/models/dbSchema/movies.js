const mongoose = require("mongoose");

const movieListSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    poster: { type: String },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieListSchema);

module.exports = {
  Movie,
};
