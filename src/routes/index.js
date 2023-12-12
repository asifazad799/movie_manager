var express = require("express");
var router = express.Router();
const sampleRoutes = require("../routes/sampleRoutes");
const authRoutes = require("../routes/authentication");
const movieRoutes = require("../routes/movies");
const { authMidleWares } = require("../midleWares");

router.use("/", sampleRoutes);
router.use("/auth", authRoutes);
router.use("/movie", movieRoutes);

// router.use("/auth",authMidleWares?.authenticateUser, authRoutes);

module.exports = router;
