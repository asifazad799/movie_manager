const mongoose = require("mongoose");

const ObjectId = (id) => new mongoose.Types.ObjectId(id);

module.exports = {
  ObjectId,
};
