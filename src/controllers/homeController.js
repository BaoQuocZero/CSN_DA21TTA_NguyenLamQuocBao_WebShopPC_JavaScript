const connection = require('../config/database');

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
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    //let {email, name, city} = req.body

    console.log('email=', email, ' name = ', name, ' city= ', city)

    connection.query(
        `INSERT INTO Users (email, name, city) VALUE(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Create user succeed');
        }
    );
}

module.exports = {
    getHomepage, getABC, hotdanit, postCreateUser
}