const express = require('express');
const router = express.Router();
const {
  getServices,
  getService,
  createService,
  updateService,
  deleteService
} = require('../controllers/serviceController');
const { protect, admin } = require('../middleware/authMiddleware');
const { cacheMiddleware } = require('../config/redis');

router.route('/').get(cacheMiddleware(3600), getServices).post(protect, admin, createService);
router.route('/:id').get(cacheMiddleware(3600), getService).put(protect, admin, updateService).delete(protect, admin, deleteService);

module.exports = router;

