const { validateRequestBody } = require("zod-express-middleware");
const { movieValidator } = require("../validations");
var express = require("express");
const { movieController } = require("../controllers");
var router = express.Router();

router.post(
  "/add",
  validateRequestBody(movieValidator?.movieValidator),
  movieController.addMovieToUser
);

router.post("/updateMovieList", movieController?.bulkAddToMovieList);

module.exports = router;
