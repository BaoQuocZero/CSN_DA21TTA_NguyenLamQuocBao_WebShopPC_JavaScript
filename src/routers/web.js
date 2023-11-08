const express = require('express');
const { getHomepage, getABC, hotdanit, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', (getHomepage))
router.get('/abc', getABC)
router.get('/hoidanit', hotdanit);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser)

module.exports = router;//exports default