const Portfolio = require('../models/Portfolio');
const { cloudinary } = require('../config/cloudinary');

// @desc    Get all portfolios
// @route   GET /api/portfolios
// @access  Public
const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ index: 1, createdAt: -1 });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single portfolio
// @route   GET /api/portfolios/:id
// @access  Public
const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create portfolio
// @route   POST /api/portfolios
// @access  Private/Admin
const createPortfolio = async (req, res) => {
  try {
    const portfolioData = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      status: ['upcoming','in_progress','completed'].includes((req.body.status || '').toLowerCase())
        ? (req.body.status || '').toLowerCase()
        : 'upcoming',
      demoUrl: req.body.demoUrl || '',
      technologies: typeof req.body.technologies === 'string' 
        ? JSON.parse(req.body.technologies) 
        : req.body.technologies,
      features: typeof req.body.features === 'string'
        ? JSON.parse(req.body.features)
        : (Array.isArray(req.body.features) ? req.body.features : []),
      results: typeof req.body.results === 'string'
        ? JSON.parse(req.body.results)
        : (Array.isArray(req.body.results) ? req.body.results : []),
      color: req.body.color || 'from-blue-500/20 to-cyan-500/20',
      index: req.body.index ? Number(req.body.index) : 0,
      updatedAt: Date.now()
    };

    // Handle primary image upload
    if (req.files && req.files['image'] && req.files['image'][0]) {
      portfolioData.image = {
        url: req.files['image'][0].path,
        publicId: req.files['image'][0].filename
      };
    }

    // Handle screenshots upload
    if (req.files && req.files['screenshots']) {
      portfolioData.screenshots = req.files['screenshots'].map(file => ({
        url: file.path,
        publicId: file.filename
      }));
    }

    const portfolio = new Portfolio(portfolioData);
    const createdPortfolio = await portfolio.save();
    res.status(201).json(createdPortfolio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update portfolio
// @route   PUT /api/portfolios/:id
// @access  Private/Admin
const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    // Update portfolio fields
    if (req.body.title) portfolio.title = req.body.title;
    if (req.body.category) portfolio.category = req.body.category;
    if (req.body.description) portfolio.description = req.body.description;
    if (typeof req.body.status !== 'undefined') {
      const s = (req.body.status || '').toLowerCase();
      if (['upcoming','in_progress','completed'].includes(s)) {
        portfolio.status = s;
      }
    }
    if (typeof req.body.demoUrl !== 'undefined') portfolio.demoUrl = req.body.demoUrl || '';
    if (req.body.technologies) {
      portfolio.technologies = typeof req.body.technologies === 'string' 
        ? JSON.parse(req.body.technologies) 
        : req.body.technologies;
    }
    if (typeof req.body.features !== 'undefined') {
      portfolio.features = typeof req.body.features === 'string'
        ? JSON.parse(req.body.features)
        : (Array.isArray(req.body.features) ? req.body.features : []);
    }
    if (typeof req.body.results !== 'undefined') {
      portfolio.results = typeof req.body.results === 'string'
        ? JSON.parse(req.body.results)
        : (Array.isArray(req.body.results) ? req.body.results : []);
    }
    if (req.body.color) portfolio.color = req.body.color;
    if (typeof req.body.index !== 'undefined') portfolio.index = Number(req.body.index) || 0;
    
    // Handle primary image upload
    if (req.files && req.files['image'] && req.files['image'][0]) {
      // Delete old primary image if exists
      if (portfolio.image && portfolio.image.publicId) {
        try {
          await cloudinary.uploader.destroy(portfolio.image.publicId);
        } catch (error) {
          console.error('Error deleting old image:', error);
        }
      }
      portfolio.image = {
        url: req.files['image'][0].path,
        publicId: req.files['image'][0].filename
      };
    }

    // Handle existing screenshots list (for deletion of removed items)
    if (typeof req.body.existingScreenshots !== 'undefined') {
      const remainingScreenshots = typeof req.body.existingScreenshots === 'string'
        ? JSON.parse(req.body.existingScreenshots)
        : req.body.existingScreenshots;
      
      const remainingIds = new Set(remainingScreenshots.map(s => s.publicId));
      for (const oldScr of portfolio.screenshots || []) {
        if (!remainingIds.has(oldScr.publicId)) {
          try {
            await cloudinary.uploader.destroy(oldScr.publicId);
          } catch (error) {
            console.error('Error deleting screenshot:', error);
          }
        }
      }
      portfolio.screenshots = remainingScreenshots;
    }

    // Add new uploaded screenshots
    if (req.files && req.files['screenshots']) {
      const newScreenshots = req.files['screenshots'].map(file => ({
        url: file.path,
        publicId: file.filename
      }));
      portfolio.screenshots = [...(portfolio.screenshots || []), ...newScreenshots];
    }

    portfolio.updatedAt = Date.now();
    const updatedPortfolio = await portfolio.save();
    res.json(updatedPortfolio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete portfolio
// @route   DELETE /api/portfolios/:id
// @access  Private/Admin
const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    // Delete image from Cloudinary if exists
    if (portfolio.image && portfolio.image.publicId) {
      try {
        await cloudinary.uploader.destroy(portfolio.image.publicId);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }

    // Delete screenshots from Cloudinary if exists
    if (portfolio.screenshots && portfolio.screenshots.length > 0) {
      for (const scr of portfolio.screenshots) {
        if (scr.publicId) {
          try {
            await cloudinary.uploader.destroy(scr.publicId);
          } catch (error) {
            console.error('Error deleting screenshot:', error);
          }
        }
      }
    }

    await portfolio.deleteOne();
    res.json({ message: 'Portfolio removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPortfolios,
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
};

