var express = require("express");
var router = express.Router();
// const app = express();

const sampleRoutes = require("../routes/sampleRoutes");

router.use("/sample", sampleRoutes);
// app.use("/auth");

module.exports = router;
