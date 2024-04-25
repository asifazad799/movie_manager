var express = require("express");
var router = express.Router();

const { authenticationService } = require("../../../serives");

router.use("/", authenticationService);

module.exports = router;
