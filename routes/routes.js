const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { registerEmail, test, getAll } = require("../controllers/controllers");
const validateFields = require("../middlewares/validateFields.js");
const Email = require("../models/Email");
const { Template } = require("../Templates/Template");
const { Template_br } = require("../Templates/Template_br");
const { Template_en } = require("../Templates/Template_en");
const { sendEmail } = require("../utils/mailing");

router.post(
  "/save",
  [
    check("email", "The email is wrong").isEmail(),
    check("name", "Please enter your name").not(),
    check("lang").not(),
    validateFields
  ],
  registerEmail
);

router.post('/send/:lang', (req,res) => {
  
  const lang = req.params.lang;
  const {email} = req.body;

  const template_es = Template({
    email,
  })

  const template_br = Template_br({
    email,
  })
  
  const template_en = Template_en({
    email,
  })

  switch (lang) {

    case "es":
        res.send(
          sendEmail(email,"Bienvenido a Secret Forest", template_es))
      break;

    case "br": 
    res.send(
      sendEmail(email,"bem-vindo à Secret Forest", template_br))
    break;

    case "en":
      res.send(
        sendEmail(email,"welcome to Secret Forest", template_en))
    break;

    case "ch":
      res.send(console.log(email))

  break;
    default:
    break;
  }
})

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