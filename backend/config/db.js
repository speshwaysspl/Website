const mongoose = require('mongoose');
const dns = require('dns');

// Set DNS servers to Google Public DNS to avoid querySrv ECONNREFUSED issues
// especially in environments with restrictive or misconfigured local DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Monitor connection
    mongoose.connection.on('error', err => {
      console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting to reconnect...');
    });

  } catch (error) {
    console.error(`Initial MongoDB connection error: ${error.message}`);
    // Do not exit process in production to maintain uptime score
    // Instead, allow the server to keep running and serve static content/health checks
    if (process.env.NODE_ENV === 'development') {
      process.exit(1);
    }
  }
};

module.exports = connectDB;