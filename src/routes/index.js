var express = require("express");
var router = express.Router();
const { validateRequestQuery } = require("zod-express-middleware");
const { sampleSchema } = require("../schema/payloadSchema/sampleSchema");

/* GET home page. */
router.get("/", validateRequestQuery(sampleSchema), (req, res) => {
  res.status(200).json({ title: "Express" });
});

module.exports = router;
