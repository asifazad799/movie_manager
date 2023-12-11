var express = require("express");
var router = express.Router();
// const app = express();

const sampleRoutes = require("../routes/sampleRoutes");
const authRoutes = require("../routes/authentication");

router.use("/sample", sampleRoutes);
router.use("/auth", authRoutes);

module.exports = router;
