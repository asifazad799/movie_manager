var express = require("express");
var router = express.Router();
const sampleRoutes = require("../routes/sampleRoutes");
const authRoutes = require("../routes/authentication");
const protectedRoutes = require("../routes/protectedRoutes");
const { authMidleWares } = require("../midleWares");

router.use("/auth", authRoutes);
router.use("/",authMidleWares?.authenticateUser, protectedRoutes);

module.exports = router;
