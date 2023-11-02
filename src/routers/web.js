const express = require('express');

const router =express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! and nodemon')
})

router.get('/abc', (req, res) => {
    res.send('Check ABC')
})

router.get('/hoidanit', (req, res) => {
    //res.send('<h1>Hoi dan IT</h1>')
    res.render('sample.ejs')
})

module.exports = router;//exports default