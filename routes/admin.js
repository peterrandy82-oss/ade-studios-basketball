const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// GET /admin — temporary foundation page.
// Authentication middleware will guard this router in Stage 3.
router.get('/', adminController.getDashboard);

module.exports = router;
