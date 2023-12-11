const mongoose = require("mongoose");

const uri = process.env.DBKEY;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  connectToDatabase,
};
