const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  user: String,
  pass: String,
});

export default model("userData", userSchema);