const { Redis } = require('@upstash/redis');

// Initialize Upstash Redis with REST credentials
const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || 'https://quiet-vulture-30940.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || 'AnjcAAIgcDK0MBN6t_0oaaq7cxWqNL_oaJOQdtBx7D1hcChAfIAbhw',
});

// Since Upstash Redis REST is stateless, we don't need connect()
// But we'll keep the function signature for compatibility with index.js
const connectRedis = async () => {
  try {
    // Basic ping to verify connectivity
    const ping = await redisClient.ping();
    if (ping === 'PONG') {
      console.log('Upstash Redis Connected (REST)');
    } else {
      console.warn('Upstash Redis Ping failed, but REST is stateless.');
    }
  } catch (error) {
    console.error('Could not verify Upstash Redis connection. App will run without caching.', error.message);
  }
};

// Middleware for caching
const cacheMiddleware = (duration) => {
  return async (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const key = `__express__${req.originalUrl || req.url}`;
    
    try {
      // Upstash Redis GET returns the value directly (parsed if JSON)
      const cachedResponse = await redisClient.get(key);
      
      if (cachedResponse) {
        res.setHeader('X-Cache', 'HIT');
        // Upstash Redis handles JSON automatically
        return res.send(typeof cachedResponse === 'string' ? JSON.parse(cachedResponse) : cachedResponse);
      } else {
        res.setHeader('X-Cache', 'MISS');
        res.originalSend = res.send;
        res.send = (body) => {
          // Only cache successful JSON responses
          if (res.statusCode === 200) {
            // Upstash set() can take objects directly, but we stringify for consistency if needed
            // duration is in seconds for Upstash as well (ex: 3600)
            redisClient.set(key, body, { ex: duration }).catch(err => {
              console.error('Upstash Redis Set Error:', err.message);
            });
          }
          res.originalSend(body);
        };
        next();
      }
    } catch (error) {
      console.error('Upstash Redis cache error', error.message);
      next();
    }
  };
};

// Function to clear cache
const clearCache = async (pattern) => {
  try {
    // Upstash Redis doesn't support glob patterns in DEL directly via REST for all keys at once easily
    // We can use SCAN if needed, but for simple invalidation of a single pattern prefix:
    // Note: Upstash REST 'keys' and 'del' work similarly to standard Redis
    const keys = await redisClient.keys(pattern);
    if (keys && keys.length > 0) {
      await redisClient.del(...keys);
    }
  } catch (error) {
    console.error('Upstash Redis clear cache error', error.message);
  }
};

module.exports = {
  redisClient,
  connectRedis,
  cacheMiddleware,
  clearCache
};
