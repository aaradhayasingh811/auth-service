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
router.post('/auth/google',verifyToken, googleAuth);  //to do 
router.post("/send-otp",sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

module.exports = router;
