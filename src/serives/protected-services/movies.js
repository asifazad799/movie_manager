var express = require("express");
const {
  validateRequestBody,
  validateRequestQuery,
} = require("zod-express-middleware");

var router = express.Router();

const { movieValidator } = require("../../validations");
const { movieController } = require("../../controllers");

router.post(
  "/add",
  validateRequestBody(movieValidator?.movieValidator),
  movieController.addMovieToUser
);

router.get(
  "/list",
  validateRequestQuery(movieValidator?.movieSearch),
  movieController?.getMovieList
);

router.get(
  "/user-movie-list",
  validateRequestQuery(movieValidator?.userMovieList),
  movieController.getUserMovieList
);

router.post("/updateMovieList", movieController?.bulkAddToMovieList);

router.delete(
  "/delete",
  validateRequestQuery(movieValidator?.deleteMovie),
  movieController?.deleteMovie
);

module.exports = router;
