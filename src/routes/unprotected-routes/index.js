var express = require("express");
var router = express.Router();

const { authRoutes } = require("./auth-routes");
const { testRoutes } = require("./test-routes");

router.use("/", testRoutes);
router.use("/auth", authRoutes);

module.exports = router;
