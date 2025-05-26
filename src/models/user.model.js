const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,},

  name: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  avatar: {
    type: String,
    default: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_items_boosted&w=740",
  },
  verificationToken: {
    type: String,
    default: null,
  },
  verificationTokenExpiry: {
    type: Date,
    default: null,
  },
  resetPasswordOtp: {
    type: String,
    default: null,
  },
  resetPasswordOtpExpiry: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
