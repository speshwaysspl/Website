const Contact = require('../models/Contact');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sendEmail = require('../utils/email');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only PDF, DOC, DOCX files
  const allowedTypes = /pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only PDF, DOC, and DOCX files are allowed for resume uploads'));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: fileFilter
});

// @desc    Submit contact form
// @route   POST /api/contact/submit
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message, type } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create contact submission
    const contactData = {
      name,
      email,
      phone: phone || '',
      subject,
      message,
      type: type || 'contact'
    };

    // Handle file upload if present
    if (req.file) {
      contactData.resume = {
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path
      };
    }

    const contact = await Contact.create(contactData);

    // If a resume was uploaded, send an email
    if (req.file && type === 'resume') {
      const resumeUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      
      try {
        await sendEmail({
          to: process.env.ADMIN_EMAIL,
          subject: `New Resume Submission: ${subject}`,
          html: `
            <h1>New Resume Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p>The resume is attached to this email.</p>
          `,
          attachments: [
            {
              filename: req.file.originalname,
              path: req.file.path,
            },
          ],
        });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // We don't want to block the user response if email fails
      }
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been submitted successfully',
      data: contact
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: error.message
    });
  }
};

// @desc    Get all contact submissions (admin only)
// @route   GET /api/contact/submissions
// @access  Private/Admin
const getSubmissions = async (req, res) => {
  try {
    const submissions = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions
    });
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve submissions',
      error: error.message
    });
  }
};

// @desc    Get single submission
// @route   GET /api/contact/submission/:id
// @access  Private/Admin
const getSubmission = async (req, res) => {
  try {
    const submission = await Contact.findById(req.params.id);
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: submission
    });
  } catch (error) {
    console.error('Get submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve submission',
      error: error.message
    });
  }
};

// @desc    Update submission status
// @route   PUT /api/contact/submission/:id/status
// @access  Private/Admin
const updateSubmissionStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const submission = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Submission status updated successfully',
      data: submission
    });
  } catch (error) {
    console.error('Update submission status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update submission status',
      error: error.message
    });
  }
};

// @desc    Delete submission
// @route   DELETE /api/contact/submission/:id
// @access  Private/Admin
const deleteSubmission = async (req, res) => {
  try {
    const submission = await Contact.findById(req.params.id);
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    // Delete associated resume file if exists
    if (submission.resume && submission.resume.path) {
      fs.unlink(submission.resume.path, (err) => {
        if (err) console.error('Error deleting resume file:', err);
      });
    }
    
    await submission.deleteOne();
    
    res.status(200).json({
      success: true,
      message: 'Submission deleted successfully'
    });
  } catch (error) {
    console.error('Delete submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete submission',
      error: error.message
    });
  }
};

module.exports = {
  submitContact,
  getSubmissions,
  getSubmission,
  updateSubmissionStatus,
  deleteSubmission,
  upload
};