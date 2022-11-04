const { response } = require("express");
const { model } = require("mongoose");
const Email = require("../models/Email");

const registerEmail = async (req, res = response) => {
  // const { name, email, password } = req.body;
  const { email } = req.body;
  try {
    //Verificar si el usuario existe
    let emailVerify = await Email.findOne({ email });
    if (emailVerify) {
      return res.status(400).json({
        ok: false,
        msg: "The email are already registered",
      });
    }
    emailVerify = new Email(req.body);
    //Guardar el usuario en la DB
    await emailVerify.save();
    res.json({
      ok: true,
      msg: "Email registred successfully",
      //    uid: email.id,
      //      email: email.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error saving the mail, please contact to admin",
    });
  }
};
const getAll = async (req, res = response) => {
  const emails = await Email.find({});
  console.log(emails);
  res.send({
    emails,
  });
};
const test = (req, res = response) => {
  console.log("hello from controllers");
};

module.exports = {
  registerEmail,
  getAll,
  test,
};
