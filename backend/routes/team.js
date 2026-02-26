const express = require('express');
const router = express.Router();
const {
  getTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} = require('../controllers/teamController');
const { protect, admin } = require('../middleware/authMiddleware');
const { uploadTeamImage } = require('../config/cloudinary');
const { cacheMiddleware } = require('../config/redis');

router.route('/').get(cacheMiddleware(3600), getTeamMembers).post(protect, admin, uploadTeamImage.single('image'), createTeamMember);
router.route('/:id').get(cacheMiddleware(3600), getTeamMember).put(protect, admin, uploadTeamImage.single('image'), updateTeamMember).delete(protect, admin, deleteTeamMember);

module.exports = router;

