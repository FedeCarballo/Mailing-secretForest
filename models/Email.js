const { Schema, model } = require("mongoose");

const EmailSchema = Schema({
  name: {
    type: String,
    require: true,
    unique: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  lang: {
    type: String,
    require: true,
    unique:false,
  }
});
module.exports = model("Email", EmailSchema);
