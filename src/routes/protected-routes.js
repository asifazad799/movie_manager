var express = require("express");
var router = express.Router();

const { movieService } = require("../serives");

router.use("/movie", movieService);

module.exports = router;
