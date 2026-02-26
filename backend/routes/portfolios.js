const express = require('express');
const router = express.Router();
const {
  getPortfolios,
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/portfolioController');
const { protect, admin } = require('../middleware/authMiddleware');
const { uploadPortfolioImage } = require('../config/cloudinary');
const { cacheMiddleware } = require('../config/redis');

router.route('/').get(cacheMiddleware(3600), getPortfolios).post(protect, admin, uploadPortfolioImage.single('image'), createPortfolio);
router.route('/:id').get(cacheMiddleware(3600), getPortfolio).put(protect, admin, uploadPortfolioImage.single('image'), updatePortfolio).delete(protect, admin, deletePortfolio);

module.exports = router;

