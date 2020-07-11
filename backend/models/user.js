const mongoose = require("mongoose");
const schema = mongoose.Schema;

var userSchema = new schema({
  designation: { type: Number, default: 2 },
  firstName: { type: String, required: true },
  lastname: { type: String, required: true },
  mobileNo: { type: Number, unique: true, required: true },
  dob: { type: Date, required: true },
  password: { type: String, required: true },
  createAt: { type: Date },
  updateAt: { type: Date, default: Date.now },
  active: { type: Number, default: 0 },
});

var user = mongoose.model("users", userSchema);

module.exports = user;
