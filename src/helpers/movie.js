const { Movie } = require("../models/dbSchema/movies");
const { User } = require("../models/dbSchema/user");
const { UserMovieList } = require("../models/dbSchema/userMovieList");

const checkExistingMovie = async (movie) => {
  let res = await Movie.findOne({ title: movie?.title });
  return res;
};

const addToMovieCollection = async (data) => {
  let res = await Movie.create({
    ...data,
  });
  res.save();
  return res;
};

const bulkUploadMovieList = async (data) => {
  let res = await Movie.insertMany(data);
  return res;
};


//used to create movie list for user in userMovielist collection
const creatUserMovieList = async (data) => {
  let res = await UserMovieList.create({
    userId: data?.userId,
    movieList: data?.selectedlist,
  });

  res.save();

  return res;
};

const updateUserMovieList = async ({ movieListId, selectedlist }) => {
  let res = await UserMovieList.findByIdAndUpdate(
    { _id: movieListId },
    { $push: { movieList: selectedlist } }
  );
  return res;
};

module.exports = {
  checkExistingMovie,
  addToMovieCollection,
  bulkUploadMovieList,
  creatUserMovieList,
  updateUserMovieList,
};
