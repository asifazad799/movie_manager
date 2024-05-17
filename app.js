const express = require("express");
require("dotenv").config();
var indexRouter = require("./src/routes");

const { connectToDatabase } = require("./src/config");
const { errorHandler, notFound } = require("./src/midleWares/errorHandler");

const app = express();
const port = process.env.PORT;

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  require("cors")({
    origin: "*",
  })
);

app.use("/api", indexRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    "\x1b[33m%s\x1b[0m",
    `Server listening on http://localhost:${port}`
  );
});

module.exports = app;
