const express = require("express");
require("dotenv").config();
const app = express();
var indexRouter = require("./src/routes/index");
const { errorHandler, notFound } = require("./src/midleWares/errorHandler");

const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  require("cors")({
    origin: "*",
  })
);

app.use("/", indexRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("\x1b[33m%s\x1b[0m", `Server listening on http://localhost:${port}`);
});
