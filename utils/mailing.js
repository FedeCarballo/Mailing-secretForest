const nodemailer = require('nodemailer');
require('dotenv').config()


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.GMAIL2, // generated ethereal user
        pass: process.env.PASS2, // generated ethereal password
    },
    from: process.env.GMAIL2
});
transporter.set('proxy_handler_myproxys', (proxy, options, callback) => {
    console.log('Proxy host=% port=%', proxy.hostname, proxy.port);
    let socket = require('tls').connect(options.port, options.host, () => {
        callback(null, {
            connection: socket,
            secured: true
        });
    });
});
exports.sendEmail = async (email, subject, textHTML) => {
    try {
        let info = await transporter.sendMail({
            from: 'Secret Forest Team <admin@secretforest.com>',
            to: email, // list of receivers
            subject: subject, // Subject line
            html: textHTML, // html body
            priority: 'high',
            replyTo: 'noreply@secretforest.com',
        });
        return info
    } catch (error) {
        return error
    }
}