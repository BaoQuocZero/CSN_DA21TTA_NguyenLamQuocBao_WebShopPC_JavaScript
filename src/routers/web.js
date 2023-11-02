const express = require('express');
const { getHomepage, getABC, hotdanit } = require('../controllers/homeController');
const router = express.Router();

router.get('/', (getHomepage))
router.get('/abc', getABC)
router.get('/hoidanit', hotdanit);

module.exports = router;//exports default