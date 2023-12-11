const { validateRequestQuery } = require("zod-express-middleware");
const { userValidations } = require("../validations");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get(
  "/",
  validateRequestQuery(userValidations?.sampleSchema),
  (req, res) => {
    res.status(200).json({ title: "Express",...req.query });
  }
);

module.exports = router;
