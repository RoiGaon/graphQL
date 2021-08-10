const mongoose = require("mongoose");
const MSchema = mongoose.Schema;

const userSchema = new MSchema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  age: {
    type: Number,
    required: true,
  },
  profession: String,
});
module.exports = mongoose.model("User", userSchema);
