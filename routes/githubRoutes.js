const express = require('express');
const { getUserStats } = require('../controllers/githubController');
const cacheMiddleware = require('../middleware/cache'); // Imports the cache middleware  

const router = express.Router();

// Apply cacheMiddleware to the route
router.get('/user/:username', cacheMiddleware, getUserStats);

module.exports = router;

