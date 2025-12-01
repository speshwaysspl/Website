const User = require('../models/User');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/email');
const crypto = require('crypto');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordMatch = await user.matchPassword(password);

    if (isPasswordMatch) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, authUser, getMe };

const requestPasswordResetOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.resetOtp = otp;
    user.resetOtpExpires = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();
    const html = `
      <div style="font-family:Arial,sans-serif;padding:16px">
        <h2 style="margin:0 0 8px">Password Reset OTP</h2>
        <p>Use the code below to reset your password. It expires in 10 minutes.</p>
        <div style="font-size:24px;font-weight:bold;letter-spacing:2px;padding:12px 16px;border:1px solid #ddd;border-radius:8px;display:inline-block">${otp}</div>
        <p style="margin-top:12px">If you did not request this, you can ignore this email.</p>
      </div>`;
    try {
      await sendEmail({ to: email, subject: 'Your OTP Code', html });
    } catch (e) {
      return res.status(500).json({ message: 'Failed to send email' });
    }
    res.json({ message: 'OTP sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyPasswordResetOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.resetOtp || !user.resetOtpExpires) {
      return res.status(400).json({ message: 'Invalid reset request' });
    }
    if (user.resetOtp !== String(otp)) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
    if (user.resetOtpExpires.getTime() < Date.now()) {
      return res.status(400).json({ message: 'OTP expired' });
    }
    return res.json({ verified: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const resetPasswordWithOtp = async (req, res) => {
  const { email, otp, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.resetOtp || !user.resetOtpExpires) {
      return res.status(400).json({ message: 'Invalid reset request' });
    }
    if (user.resetOtp !== String(otp)) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
    if (user.resetOtpExpires.getTime() < Date.now()) {
      return res.status(400).json({ message: 'OTP expired' });
    }
    user.password = password;
    user.resetOtp = null;
    user.resetOtpExpires = null;
    await user.save();
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.requestPasswordResetOtp = requestPasswordResetOtp;
module.exports.verifyPasswordResetOtp = verifyPasswordResetOtp;
module.exports.resetPasswordWithOtp = resetPasswordWithOtp;
