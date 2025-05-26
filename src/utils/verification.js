const expressValidator = require('express-validator');
const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const sendEmail = require('../utils/email.js');
const sendVerificationEmail = async (user) => {
    const verificationToken = crypto.randomBytes(32).toString('hex');
    user.verificationToken = verificationToken;
    user.verificationTokenExpiry = Date.now() + 3600000; // 1 hour

    await user.save();

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;

    const emailContent = `
        <h1>Email Verification</h1>
        <p>Click the link below to verify your email:</p>
        <a href="${verificationLink}">Verify Email</a>
    `;

    await sendEmail({
        to: user.email,
        subject: 'Email Verification',
        html: emailContent
    });
}


module.exports = {
    sendVerificationEmail,

    verifyEmail: async (req, res) => {
        const { token } = req.query;

        if (!token) {
            return res.status(400).json({ message: 'Verification token is required' });
        }

        try {
            const user = await User.findOne({
                verificationToken: token,
                verificationTokenExpiry: { $gt: Date.now() }
            });

            if (!user) {
                return res.status(400).json({ message: 'Invalid or expired verification token' });
            }

            user.verificationToken = null;
            user.verificationTokenExpiry = null;
            await user.save();

            res.status(200).json({ message: 'Email verified successfully' });
        } catch (error) {
            console.error('Error in verifyEmail:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};