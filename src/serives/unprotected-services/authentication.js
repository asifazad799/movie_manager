const { validateRequestBody } = require("zod-express-middleware");
const { userValidations2 } = require("../../validations");
var express = require("express");
const { userController } = require("../../controllers");
var router = express.Router();

router.post(
  "/log-in",
  validateRequestBody(userValidations2?.userLogin),
  userController.login
);

router.post(
  "/sign-up",
  validateRequestBody(userValidations2?.userLogin),
  userController.signUp
);

module.exports = router;
