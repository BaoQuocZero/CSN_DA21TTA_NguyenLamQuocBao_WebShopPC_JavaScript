const connection = require('../config/database');

let users = []

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const hotdanit = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, hotdanit
}