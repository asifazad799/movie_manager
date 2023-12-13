var express = require("express");
var router = express.Router();
const sampleRoutes = require("../routes/sampleRoutes");
const authRoutes = require("../routes/authentication");
const protectedRoutes = require("../routes/movies");
const { authMidleWares } = require("../midleWares");

router.use("/", sampleRoutes);
router.use("/auth", authRoutes);
router.use("/",authMidleWares?.authenticateUser, protectedRoutes);

// router.use("/auth",authMidleWares?.authenticateUser, authRoutes);

module.exports = router;
