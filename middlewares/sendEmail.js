const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

const sendEmail = async ({ from, to, subject, html }) => {
    const sendersEmail = from || "info@ehmasuk.com";

    const info = await transporter.sendMail({
        from: "<" + sendersEmail + ">",
        to,
        subject,
        html,
    });

    if (info) {
        return info.messageId;
    } else {
        console.log("Something went wrong sending email");
    }
};

module.exports = sendEmail;
