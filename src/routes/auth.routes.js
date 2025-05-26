const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  deleteProfile,
  forgotPassword,
  changePassword,
  googleAuth,
    sendOtp,
  verifyOtp,
  resetPassword,

} = require('../controllers/auth.controller.js');
const {verifyToken} = require('../utils/token.js');
router.post('/register', register);
router.post('/login', login);
router.post('/logout',verifyToken, logout);
router.post('/auth/google', googleAuth); 
router.post("/send-otp", verifyToken, sendOtp);
router.post("/verify-otp",verifyToken, verifyOtp);
router.post("/reset-password",verifyToken, resetPassword);

module.exports = router;
