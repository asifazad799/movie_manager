var express = require("express");
var router = express.Router();
const sampleRoutes = require("../routes/sampleRoutes");
const authRoutes = require("../routes/authentication");
const { authMidleWares } = require("../midleWares");

router.use("/sample", sampleRoutes);
router.use("/auth", authRoutes);

// router.use("/auth",authMidleWares?.authenticateUser, authRoutes);

module.exports = router;
