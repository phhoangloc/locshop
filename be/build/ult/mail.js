"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailToAcceptRegister = void 0;
require('dotenv').config();
const nodemailer_1 = require("nodemailer");
const transporter = (0, nodemailer_1.createTransport)({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: "ph.hoangloc@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
    },
});
const sendMailToAcceptRegister = async (email) => {
    const mainOptions = {
        from: 'LOCSHOP (ph.hoangloc@gmail.com) <no-reply>',
        to: email,
        subject: 'Active your Account',
        html: `
        <p style="text-align:center">Thanks for you registering!<p>
        <p style="text-align:center">To active the account click <a style="font-weight:bold;color:green" href="${process.env.NODE_APP_URL}api/active?email=${email}">here</a>!<p>`
    };
    await transporter.sendMail(mainOptions);
};
exports.sendMailToAcceptRegister = sendMailToAcceptRegister;
//# sourceMappingURL=mail.js.map