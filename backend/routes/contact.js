const express = require('express');
const router = express.Router();
const {
  submitContact,
  getSubmissions,
  getSubmission,
  updateSubmissionStatus,
  deleteSubmission,
  upload
} = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/submit', upload.single('resume'), submitContact);

// Admin routes (protected)
router.get('/submissions', protect, getSubmissions);
router.get('/submission/:id', protect, getSubmission);
router.put('/submission/:id/status', protect, updateSubmissionStatus);
router.delete('/submission/:id', protect, deleteSubmission);

module.exports = router;