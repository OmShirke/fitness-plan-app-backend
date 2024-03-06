const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 3,
    max: 20,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 8,
    max: 8,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    max: 50,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
