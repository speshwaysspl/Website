const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Set security headers
app.use(helmet({
  contentSecurityPolicy: false, // Disable for now to avoid breaking Vite/Cloudinary
  crossOriginEmbedderPolicy: false,
}));

// Rate limiting to prevent DoS attacks and maintain uptime
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests, please try again later'
  }
});

// Apply rate limiter to all API routes
app.use('/api/', limiter);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable compression
app.use(compression());

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:8080',
    'http://localhost:8081',
    'https://www.speshway.com',
    'https://speshway.com',
    'http://localhost:3000',
    'http://127.0.0.1:8080',
    'http://127.0.0.1:8081',
    'http://127.0.0.1:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:4173',
    'http://127.0.0.1:4173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Require-Auth'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

// Enable CORS (handles preflight requests automatically)
app.use(cors(corsOptions));

// Routes - Place dynamic routes before static files ifdddd they should take precedence
app.use('/', require('./routes/sitemap'));

// Serve static files from uploads directory with caching
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  maxAge: '1y',
  immutable: true
}));

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend/dist');

// Serve static files with efficient caching strategy
app.use(express.static(frontendPath, {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
      // Normalize path for consistent checking (works on Windows/Linux)
      const normalizedPath = filePath.replace(/\\/g, '/').toLowerCase();
      
      // 1. NEVER cache HTML files
      if (normalizedPath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      } 
      // 2. Cache hashed assets (JS/CSS in /assets/) and fonts
      // Vite adds hashes like index-B0SagDFc.css, these are safe to cache forever
      else if (
        normalizedPath.includes('/assets/') || 
        normalizedPath.includes('/fonts/') ||
        normalizedPath.match(/-[a-z0-9]{8,}\.(js|css|woff2|woff|ttf)$/i)
      ) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      // 3. Cache static images in the root dist folder or anywhere else
      else if (normalizedPath.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|avif)$/i)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      // 4. Everything else (robots.txt, sitemap.xml)
      else {
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    }
}));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/services', require('./routes/services'));
app.use('/api/portfolios', require('./routes/portfolios'));
app.use('/api/team', require('./routes/team'));
app.use('/api/gallery', require('./routes/gallery'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/sentences', require('./routes/sentences'));
app.use('/api/home-banners', require('./routes/homeBanners'));
app.use('/api/settings', require('./routes/settings'));
app.use('/api/jobs', require('./routes/jobs'));

// Handle SPA fallback - serve index.html for any unknown routes
app.get(/(.*)/, (req, res) => {
  // If request is for API, don't serve index.html
  if (req.path.startsWith('/api')) {
    return res.status(404).json({
      success: false,
      message: 'API route not found'
    });
  }
  
  const indexFile = path.join(__dirname, '../frontend/dist/index.html');
  
  // Set headers for SPA fallback too
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.sendFile(indexFile);
});

// API health check
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  if (dbStatus === 'disconnected') {
    return res.status(503).json({
      status: 'degraded',
      message: 'Database is disconnected',
      timestamp: new Date().toISOString(),
      database: dbStatus
    });
  }

  res.json({ 
    status: 'ok',
    message: 'Backend API is healthy',
    timestamp: new Date().toISOString(),
    database: dbStatus,
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size is 5MB'
      });
    }
  }
  
  if (error.message && error.message.includes('Only PDF, DOC, and DOCX files')) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
  
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: error.message
  });
});

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

// Handle unhandled promise rejections to prevent process crash
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process if it's a critical error
  // But in production, we might want to just log it and keep running
  // server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  // server.close(() => process.exit(1));
});
