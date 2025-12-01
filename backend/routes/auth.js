const express = require('express');
const router = express.Router();
const { registerUser, authUser, getMe, requestPasswordResetOtp, verifyPasswordResetOtp, resetPasswordWithOtp } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/me', protect, getMe);
router.post('/forgot/request-otp', requestPasswordResetOtp);
router.post('/forgot/verify', verifyPasswordResetOtp);
router.post('/forgot/reset', resetPasswordWithOtp);

module.exports = router;
