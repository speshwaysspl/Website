const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'in_progress', 'completed'],
    default: 'upcoming'
  },
  demoUrl: {
    type: String,
    default: ''
  },
  features: [{
    type: String,
    trim: true
  }],
  results: [{
    value: { type: String, trim: true },
    label: { type: String, trim: true }
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  color: {
    type: String,
    default: 'from-blue-500/20 to-cyan-500/20'
  },
  image: {
    url: {
      type: String,
      default: ''
    },
    publicId: {
      type: String,
      default: ''
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);

