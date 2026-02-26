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

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend/dist');

// 1. Explicitly serve assets folder with long cache
// Note: We use maxAge + setHeaders to be doubly sure
app.use('/assets', express.static(path.join(frontendPath, 'assets'), {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res) => {
    // Force header in case maxAge is ignored by some proxy
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

// 2. Serve root files (favicon, robots.txt, etc)
app.use(express.static(frontendPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // Never cache index.html so updates are immediate
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else {
      // Default cache for other root files
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
app.get('*splat', (req, res) => {
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
