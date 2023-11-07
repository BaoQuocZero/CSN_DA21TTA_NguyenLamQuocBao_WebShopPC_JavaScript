const connection = require('../config/database');

let users = []

const getHomepage = (req, res) => {
    //process data
    //call model
    // simple query
    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            users = results;
            console.log('>>>>results= ', results); // results contains rows returned by server
             res.send(JSON.stringify(users))
        }
    );   
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