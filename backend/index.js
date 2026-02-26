const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const compression = require('compression');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

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

// Serve static files from uploads directory with caching
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  maxAge: '30d',
  immutable: true
}));

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend/dist');

// Serve static files with efficient caching strategy
// This single middleware handles all static assets including those in /assets
app.use(express.static(frontendPath, {
  maxAge: '1y', // Default long cache duration
  setHeaders: (res, filePath) => {
    // Convert backslashes to forward slashes for consistent path matching
    const normalizedPath = filePath.replace(/\\/g, '/');
    
    if (normalizedPath.endsWith('.html')) {
      // Never cache HTML files to ensure updates are seen immediately
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else if (normalizedPath.includes('/assets/') || normalizedPath.includes('/fonts/')) {
      // Cache assets in 'assets' and 'fonts' folders (JS, CSS, images, fonts)
      // These are either hashed by Vite or stable enough for long caching
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (normalizedPath.match(/\.(jpg|jpeg|png|gif|svg|ico|webp)$/i)) {
      // Cache images for a long time as they don't change often
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      // Default cache for other root files (robots.txt, etc.)
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));

// Routes
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
app.use('/', require('./routes/sitemap'));

// Handle SPA fallback - serve index.html for any unknown routes
app.get(/(.*)/, (req, res) => {
  // If request is for API, don't serve index.html
  if (req.path.startsWith('/api')) {
    return res.status(404).json({
      success: false,
      message: 'API route not found'
    });
  }
  
  // Check if frontend build exists
  const indexFile = path.join(__dirname, '../frontend/dist/index.html');
  if (require('fs').existsSync(indexFile)) {
    res.sendFile(indexFile);
  } else {
    res.status(404).send('Frontend build not found. Please run "npm run build" in the frontend directory.');
  }
});

// API health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Backend API is healthy',
    timestamp: new Date().toISOString(),
    database: 'connected' // You can check DB connection status here
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

app.listen(PORT, console.log(`Server running on port ${PORT}`));
