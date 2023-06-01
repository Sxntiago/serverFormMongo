const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    name: String,
    country: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("User", userScheme);

module.exports = User;
