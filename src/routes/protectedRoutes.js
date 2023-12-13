var express = require("express");
var router = express.Router();
const movieRoutes = require("../routes/movies");

router.use("/movie", movieRoutes);

module.exports = router;
