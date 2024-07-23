const mongoose = require("mongoose");
require('dotenv').config();
// define the MongoDB connection URL
// const mongoURL =process.env.MONGODB_URL_LOCAL

const mongoURL =process.env.MONGODB_URL

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});
const db = mongoose.connection;

// Define event listeners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});
db.on("error", (err) => {
  console.log("MongoDB connection error", err);
});
db.on("disconnected", () => {
  console.log("disConnected to MongoDB server");
});
//export the database connection
module.exports = db;
