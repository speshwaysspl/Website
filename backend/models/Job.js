const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobNumber: {
    type: Number,
    unique: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    default: '',
    trim: true,
  },
  type: {
    type: String,
    enum: ['full_time', 'part_time', 'contract', 'internship'],
    default: 'full_time',
  },
  experience: {
    type: String,
    default: '',
    trim: true,
  },
  department: {
    type: String,
    default: '',
    trim: true,
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Job', jobSchema);
