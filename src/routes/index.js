var express = require("express");
var router = express.Router();
const sampleRoutes = require("../routes/sampleRoutes");
const authRoutes = require("../routes/authentication");
const protectedRoutes = require("../routes/protectedRoutes");
const { authMidleWares } = require("../midleWares");

router.get("/test", async (req, res) => {
  res.status(200).json({ message: `hello ${req?.query?.text}` });
});

router.get("/test-crash", async (req, res, next) => {
  try {
    console.log("Simulating server crash...");
    process.exit(1);
  } catch (error) {
    next(error);
  }
});

router.use("/auth", authRoutes);
router.use("/", authMidleWares?.authenticateUser, protectedRoutes);

module.exports = router;
