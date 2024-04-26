var express = require("express");
var router = express.Router();

const { testService, authenticationService } = require("../serives");

router.use("/", testService);
router.use("/auth", authenticationService);

module.exports = router;
