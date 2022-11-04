const {Router} = require('express');
require('dotenv').config();

const router = Router();

const nodemailer = require('nodemailer');
const { default: Template } = require('../Templates/Template');

router.post('/send-email', async (req,res) => {
    const {name, email, phone, message} = req.body;

    mailConfig = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true, //activar SSL
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      };
      contentHTML = Template; 
      try {
        let transporter = nodemailer.createTransport(mailConfig);
        transporter.sendMail({
            from: 'Secret Forest Server <noreplay@secretforest.world',
            to:'carballo523@gmail.com',
            subject: 'Wellcome to the server',
            text:"hello world",
            html: contentHTML,
        }).then((info) => {
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        })
      } catch (error) {
     console.log(error)
      }
})

module.exports = router;