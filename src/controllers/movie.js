const { movieHelper } = require("../helpers");

const addMovieToUser = async (req, res, next) => {
  try {
    const { selectedlist, userId, ...rest } = req?.body;

    console.log(req?.body, "hhai");

    // //check wheathre movie already exist in our DB
    // let isMovieExist = await movieHelper?.checkExistingMovie(title);

    // let movieId;
    // //if movie does not exist in our DB, add movie to DB
    // if (isMovieExist == null) {
    //   movieId = await movieHelper?.addToMovieCollection({ poster, title });
    // }

    if (!rest?.movieListId) {
      //means user does not have a movie list and add the @movieId to it
      let res = await movieHelper.creatUserMovieList({ selectedlist, userId });
    }

    res.status(200).json({ message: "sucess" });
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
