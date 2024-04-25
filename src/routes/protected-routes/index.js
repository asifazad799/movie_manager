var express = require("express");
var router = express.Router();

const { movieRoutes } = require("./movie-routes");

router.use("/movie", movieRoutes);

module.exports = router;
