var express = require("express");
const { sendErrorResponse } = require("../../utils/errorHandlers");

var router = express.Router();

router.get("/test", async (req, res) => {
  res.status(200).json({ message: `hello ${req?.query?.text}` });
});

router.get("/test-error", async (req, res, next) => {
  try {
    console.log("Simulating server crash...");
    process.exit(1);
  } catch (error) {
    sendErrorResponse(res, error);
  }
});

module.exports = router;
