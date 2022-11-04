const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { registerEmail, test, getAll } = require("../controllers/controllers");
const validateFields = require("../middlewares/validateFields.js");
const Email = require("../models/Email");

router.post(
  "/save",
  [
    check("email", "The email is wrong").isEmail(),
    check("name", "Please enter your name").not(),
    check("lang").not(),
    validateFields,
  ],
  registerEmail
);

router.get("/get", async (req, res) => {
  const emails = await Email.find({});
  res.send({
    emails,
  });
});

router.get("/get/es", async (req,res)=> {
  const emails = await Email.find({"lang": "es"});
  res.send({
    emails,
  });
});
router.get("/get/en", async (req,res)=> {
  const emails = await Email.find({"lang": "en"});
  res.send({
    emails,
  });
});
router.get("/get/br", async (req,res)=> {
  const emails = await Email.find({"lang": "br"});
  res.send({
    emails,
  });
});
module.exports = router;




// F4bLWWWcSZ6L1dQk contraseña db FedeCarballo User 