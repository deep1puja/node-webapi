var nodemailer = require('nodemailer');
const config = require('../../config/properties.js')
module.exports = nodemailer.createTransport({
    host: config.senderEmailHost,
    port: config.senderEmailPort,
    service: config.senderEmailservice,
    secure: true,
    auth: {
        user: config.senderEmail,
        pass: config.senderEmailPass
    }
});