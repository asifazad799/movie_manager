const {
  validateRequestBody,
  validateRequestQuery,
} = require("zod-express-middleware");
const { movieValidator } = require("../validations");
var express = require("express");
const { movieController } = require("../controllers");
var router = express.Router();

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
