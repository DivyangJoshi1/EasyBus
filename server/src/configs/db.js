const mongoose = require("mongoose");
require("dotenv").config();

let connect = () => {
  return mongoose.connect(process.env.MONGO_PATH, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connect;
