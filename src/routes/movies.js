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

router.post("/updateMovieList", movieController?.bulkAddToMovieList);

module.exports = router;
