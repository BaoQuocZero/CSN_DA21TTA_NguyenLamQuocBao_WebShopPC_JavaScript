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

const postCreateUser = (req, res) => {
    console.log('>>>Check req.body', req.body)
    res.send('Create user') 
} 

module.exports = {
    getHomepage, getABC, hotdanit, postCreateUser
}