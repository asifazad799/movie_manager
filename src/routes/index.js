var express = require("express");
var router = express.Router();
const sampleRoutes = require("../routes/sampleRoutes");
const authRoutes = require("../routes/authentication");
const protectedRoutes = require("../routes/protectedRoutes");
const { authMidleWares } = require("../midleWares");

router.get("/test", async (req, res) => {
  res.status(200).json({ message: "hello" });
});

router.get("/test-error", async (req, res, next) => {
  try {
    throw new Error("Test error");
  } catch (error) {
    next(error);
  }
});

router.use("/auth", authRoutes);
router.use("/", authMidleWares?.authenticateUser, protectedRoutes);

module.exports = router;
