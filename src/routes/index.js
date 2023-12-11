var express = require("express");
var router = express.Router();
const { validateRequestQuery } = require("zod-express-middleware");
const { userValidations } = require("../validations");

/* GET home page. */
router.get(
  "/",
  validateRequestQuery(userValidations?.sampleSchema),
  (req, res) => {
    res.status(200).json({ title: "Express" });
  }
);

module.exports = router;
