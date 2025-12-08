const Job = require('../models/Job');

// @desc    Get all jobs (optionally only open)
// @route   GET /api/jobs
// @access  Public
const getJobs = async (req, res) => {
  try {
    const { status } = req.query;
    const query = {};
    if (status) query.status = status;
    const jobs = await Job.find(query).sort({ postedAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    if (job.jobNumber == null) {
      try {
        const last = await Job.findOne().sort({ jobNumber: -1 }).select('jobNumber');
        const nextNumber = (last?.jobNumber || 0) + 1;
        job.jobNumber = nextNumber;
        await job.save();
      } catch (e) {}
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create job
// @route   POST /api/jobs
// @access  Private/Admin
const createJob = async (req, res) => {
  try {
    const last = await Job.findOne().sort({ jobNumber: -1 }).select('jobNumber');
    const nextNumber = (last?.jobNumber || 0) + 1;

    const job = new Job({
      ...req.body,
      jobNumber: nextNumber,
      postedAt: Date.now(),
      updatedAt: Date.now(),
    });
    const createdJob = await job.save();
    res.status(201).json(createdJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private/Admin
const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    Object.assign(job, req.body);
    job.updatedAt = Date.now();
    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete job
// @route   DELETE /api/jobs/:id
// @access  Private/Admin
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    await job.deleteOne();
    res.json({ message: 'Job removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
