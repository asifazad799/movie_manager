const { validateRequestQuery } = require("zod-express-middleware");
const { userValidations } = require("../validations");
var express = require("express");
const { sample } = require("../controllers");
var router = express.Router();

/* GET home page. */
router.get(
  "/",
  validateRequestQuery(userValidations?.sampleSchema),
  sample.sampleController
);

module.exports = router;
