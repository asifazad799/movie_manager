var express = require("express");

const protectedRoutes = require("./protected-routes");
const unProtectedRoutes = require("./unprotected-routes");

const { authMidleWares } = require("../midleWares");

var router = express.Router();

router.get("/test", async (req, res) => {
  res.status(200).json({ message: `hello ${req?.query?.text}` });
});

router.use("/", unProtectedRoutes);
router.use("/", authMidleWares?.authenticateUser, protectedRoutes);

module.exports = router;
