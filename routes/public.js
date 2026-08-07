const express = require('express');
const router = express.Router();

const publicController = require('../controllers/publicController');

// GET / — temporary foundation homepage (Stage 1)
router.get('/', publicController.getHome);

module.exports = router;
