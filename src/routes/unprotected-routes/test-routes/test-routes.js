var router = require("express").Router();

const { testService } = require("../../../serives");

router.use("/", testService);

module.exports = router;
