// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const dotenv = require('dotenv');
// dotenv.config();

// const {
//     EMAIL_CLIENT_ID,
//     EMAIL_CLIENT_SECRET,
//     EMAIL_REFRESH_TOKEN,
//     EMAIL_USER
// } = process.env;

// const OAuth2 = google.auth.OAuth2;
// const oauth2Client = new OAuth2(
//     EMAIL_CLIENT_ID,
//     EMAIL_CLIENT_SECRET,
//     'https://developers.google.com/oauthplayground'
// );

// oauth2Client.setCredentials({ refresh_token: EMAIL_REFRESH_TOKEN });

// const sendEmail = async ({ to, subject, html }) => {
//     try {
//         if (!to || !subject || !html) {
//             throw new Error('Missing email fields');
//         }

//         const { token: accessToken } = await oauth2Client.getAccessToken();

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: EMAIL_USER,
//                 clientId: EMAIL_CLIENT_ID,
//                 clientSecret: EMAIL_CLIENT_SECRET,
//                 refreshToken: EMAIL_REFRESH_TOKEN,
//                 accessToken
//             }
//         });

//         const mailOptions = {
//             from: `Your App <${EMAIL_USER}>`,
//             to,
//             subject,
//             html
//         };

//         const result = await transporter.sendMail(mailOptions);
//         return result;
//     } catch (error) {
//         console.error('Email sending failed:', {
//             to,
//             subject,
//             error: error.message,
//             stack: error.stack
//         });
//         throw new Error('Email sending failed');
//     }
// };

// module.exports = sendEmail;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ to, subject, text }) => {
  const mailOptions = {
    from: `"YourAppName" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("sendEmail error:", error);
    throw new Error("Email sending failed");
  }
};

module.exports = sendEmail;
