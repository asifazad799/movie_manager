const { validateRequestBody } = require("zod-express-middleware");
const { userValidations2 } = require("../validations");
var express = require("express");
const { userController } = require("../controllers");
var router = express.Router();

/* GET home page. */
router.post(
  "/login",
  validateRequestBody(userValidations2?.userLogin),
  userController.login
);

module.exports = router;