const Gallery = require('../models/Gallery');
const { cloudinary } = require('../config/cloudinary');
const mongoose = require('mongoose');

// @desc    Get all gallery items with filtering
// @route   GET /api/gallery
// @access  Public
const getGalleryItems = async (req, res) => {
  try {
    const { category, limit = 12, page = 1, sort = '-date' } = req.query;
    
    // Build query
    const query = { isActive: true };
    if (category && category !== 'all') {
      query.category = category;
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Execute query with pagination
    const galleryItems = await Gallery.find(query)
      .populate('createdBy', 'name email')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const totalCount = await Gallery.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      success: true,
      data: galleryItems,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalItems: totalCount,
        itemsPerPage: parseInt(limit),
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery items',
      error: error.message
    });
  }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
const getGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id)
      .populate('createdBy', 'name email');

    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    res.status(200).json({
      success: true,
      data: galleryItem
    });
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery item',
      error: error.message
    });
  }
};

// @desc    Create new gallery item
// @route   POST /api/gallery
// @access  Private (Admin)
const createGalleryItem = async (req, res) => {
  try {
    const { title, description, category, date, location, readMoreLink } = req.body;

    // Validate required fields
    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, description, and category'
      });
    }

    // Validate category
    const validCategories = ['Fests', 'Awards', 'Fun Activities', 'Team Moments'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid category. Must be one of: Fests, Awards, Fun Activities, Team Moments'
      });
    }

    // Check if image was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload an image'
      });
    }

    // Create gallery item
    const galleryItem = await Gallery.create({
      title,
      description,
      category,
      date: date || new Date(),
      location: location || '',
      readMoreLink: readMoreLink || '',
      image: {
        url: req.file.path,
        publicId: req.file.filename
      },
      createdBy: req.user.id
    });

    // Populate createdBy field for response
    await galleryItem.populate('createdBy', 'name email');

    res.status(201).json({
      success: true,
      message: 'Gallery item created successfully',
      data: galleryItem
    });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    
    // Clean up uploaded image if creation failed
    if (req.file && req.file.filename) {
      try {
        await cloudinary.uploader.destroy(req.file.filename);
      } catch (cloudinaryError) {
        console.error('Error deleting image from Cloudinary:', cloudinaryError);
      }
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create gallery item',
      error: error.message
    });
  }
};

// @desc    Update gallery item
// @route   PUT /api/gallery/:id
// @access  Private (Admin)
const updateGalleryItem = async (req, res) => {
  try {
    const { title, description, category, date, location, readMoreLink, isActive } = req.body;

    // Find existing gallery item
    let galleryItem = await Gallery.findById(req.params.id);

    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    // Validate category if provided
    if (category) {
      const validCategories = ['Fests', 'Awards', 'Fun Activities', 'Team Moments'];
      if (!validCategories.includes(category)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid category. Must be one of: Fests, Awards, Fun Activities, Team Moments'
        });
      }
    }

    // Store old image info in case we need to delete it
    const oldImagePublicId = galleryItem.image.publicId;

    // Update fields
    if (title) galleryItem.title = title;
    if (description) galleryItem.description = description;
    if (category) galleryItem.category = category;
    if (date) galleryItem.date = date;
    if (location !== undefined) galleryItem.location = location;
    if (readMoreLink !== undefined) galleryItem.readMoreLink = readMoreLink;
    if (isActive !== undefined) galleryItem.isActive = isActive;

    // Handle new image upload
    if (req.file) {
      galleryItem.image = {
        url: req.file.path,
        publicId: req.file.filename
      };
    }

    await galleryItem.save();

    // Populate createdBy field for response
    await galleryItem.populate('createdBy', 'name email');

    // Delete old image from Cloudinary if new image was uploaded
    if (req.file && oldImagePublicId) {
      try {
        await cloudinary.uploader.destroy(oldImagePublicId);
      } catch (cloudinaryError) {
        console.error('Error deleting old image from Cloudinary:', cloudinaryError);
      }
    }

    res.status(200).json({
      success: true,
      message: 'Gallery item updated successfully',
      data: galleryItem
    });
  } catch (error) {
    console.error('Error updating gallery item:', error);

    // Clean up uploaded image if update failed
    if (req.file && req.file.filename) {
      try {
        await cloudinary.uploader.destroy(req.file.filename);
      } catch (cloudinaryError) {
        console.error('Error deleting image from Cloudinary:', cloudinaryError);
      }
    }

    res.status(500).json({
      success: false,
      message: 'Failed to update gallery item',
      error: error.message
    });
  }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private (Admin)
const deleteGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);

    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    // Delete image from Cloudinary
    if (galleryItem.image.publicId) {
      try {
        await cloudinary.uploader.destroy(galleryItem.image.publicId);
      } catch (cloudinaryError) {
        console.error('Error deleting image from Cloudinary:', cloudinaryError);
      }
    }

    await galleryItem.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Gallery item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete gallery item',
      error: error.message
    });
  }
};

// @desc    Get gallery statistics
// @route   GET /api/gallery/stats
// @access  Private (Admin)
const getGalleryStats = async (req, res) => {
  try {
    const stats = await Gallery.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          category: '$_id',
          count: 1,
          _id: 0
        }
      }
    ]);

    const totalItems = await Gallery.countDocuments();
    const activeItems = await Gallery.countDocuments({ isActive: true });

    res.status(200).json({
      success: true,
      data: {
        totalItems,
        activeItems,
        categoryStats: stats
      }
    });
  } catch (error) {
    console.error('Error fetching gallery stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery statistics',
      error: error.message
    });
  }
};

// @desc    Get all unique categories
// @route   GET /api/gallery/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    // Get unique categories from the database
    const categories = await Gallery.distinct('category');
    
    // If no categories exist, return the default ones
    const defaultCategories = ['Fests', 'Awards', 'Fun Activities', 'Team Moments'];
    const availableCategories = categories.length > 0 ? categories : defaultCategories;

    res.status(200).json({
      success: true,
      data: availableCategories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message
    });
  }
};

module.exports = {
  getGalleryItems,
  getGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  getGalleryStats,
  getCategories
};