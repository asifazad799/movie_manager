const { movieHelper, userHelpers } = require("../helpers");

const addMovieToUser = async (req, res, next) => {
  try {
    const { selectedlist, userId, ...rest } = req?.body;

    console.log(req?.body, "hhai");

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

    // if(rest?.movieListId){

    // }
    console.log(movieList?._id, "bbjj");

    res.status(200).json({ message: "success" });
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

module.exports = {
  addMovieToUser,
  bulkAddToMovieList,
};
