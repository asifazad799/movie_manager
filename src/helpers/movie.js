const { Movie } = require("../models/dbSchema/movies");
const { User } = require("../models/dbSchema/user");
const { UserMovieList } = require("../models/dbSchema/userMovieList");
const mongoose = require("mongoose");
const { ObjectId } = require("../utils/mongoose");

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

//internal use only to update DB with more movie data
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

//update users existing user movie list
const updateUserMovieList = async ({ movieListId, selectedlist }) => {
  let res = await UserMovieList.findByIdAndUpdate(
    { _id: movieListId },
    { $addToSet: { movieList: selectedlist } }
  );
  return res;
};

const getAllMovies = async ({ search, neList }) => {
  let resp;
  if (search) {
    resp = await Movie.find({
      $text: {
        $search: `\"${search}\"`,
      },
      _id: { $nin: neList?.split(",") ? neList?.split(",") : [] },
    });
  } else {
    resp = await Movie.find({
      _id: { $nin: neList?.split(",") ? neList?.split(",") : [] },
    });
  }
  return resp;
};

const getUserMovieList = async ({ userId, search = "" }) => {
  let pipline = [
    {
      $match: {
        $expr: {
          $in: ["$_id", "$$movieIds"],
        },
      },
    },
  ];

  if (search != "") {
    pipline = [
      {
        $match: {
          $text: { $search: search },
        },
      },
      ...pipline,
    ];
  }

  let resp = await UserMovieList.aggregate([
    { $match: { userId: ObjectId(userId) } },
    {
      $lookup: {
        from: "movies",
        let: {
          movieIds: "$movieList.movieId",
          watched: "$movieList.watched",
        },
        pipeline: pipline,
        as: "newMovieList",
      },
    },
    {
      $addFields: {
        newMovieList: {
          $map: {
            input: "$newMovieList",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  watched: {
                    $arrayElemAt: [
                      "$movieList.watched",
                      {
                        $indexOfArray: ["$newMovieList._id", "$$this._id"],
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
        movieList: "$$REMOVE",
      },
    },
  ]);
  return resp[0];
};

const deleteMovieItem = async ({ userId, movieId }) => {
  let resp = await UserMovieList.updateOne(
    { userId: ObjectId(userId) },
    {
      $pull: {
        movieList: { movieId: ObjectId(movieId) },
      },
    }
  );
  return resp;
};

module.exports = {
  checkExistingMovie,
  addToMovieCollection,
  bulkUploadMovieList,
  creatUserMovieList,
  updateUserMovieList,
  getAllMovies,
  getUserMovieList,
  deleteMovieItem,
};
