const { movieHelper, userHelpers } = require("../helpers");

const addMovieToUser = async (req, res, next) => {
  try {
    const { selectedlist, userId, ...rest } = req?.body;

    let movieList;
    if (!rest?.movieListId) {
      movieList = await movieHelper.creatUserMovieList({
        selectedlist,
        userId,
      });
      await userHelpers.updateUserMovieListId({
        userId,
        movieListId: movieList?._id,
      });
    } else {
      await movieHelper?.updateUserMovieList({
        movieListId: rest?.movieListId,
        selectedlist,
      });
    }

    res.status(200).json({ message: "success", movieList });
  } catch (error) {
    next(error);
  }
};

const bulkAddToMovieList = async (req, res, next) => {
  try {
    let response = await movieHelper?.bulkUploadMovieList(req.body?.movieList);
    return res.status(200).json({ message: "upload success", response });
  } catch (error) {
    next(error);
  }
};

const getMovieList = async (req, res, next) => {
  try {
    let resp = await movieHelper?.getAllMovies({
      search: req?.query?.search,
      neList: req?.query?.neList,
    });

    return res.status(200).json({ message: "success", list: resp });
  } catch (error) {
    next(error);
  }
};

const getUserMovieList = async (req, res, next) => {
  try {
    let resp = await movieHelper?.getUserMovieList({
      userId: req?.query?.userId,
    });

    return res.status(200).json({ list: resp });
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    await movieHelper?.deleteMovieItem({
      userId: req?.query?.userId,
      movieId: req?.query?.movieId,
    });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addMovieToUser,
  bulkAddToMovieList,
  getMovieList,
  getUserMovieList,
  deleteMovie,
};
