const connection = require('../config/database');
const { getAllUsers, getUserById } = require('../services/CRUDservices')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const hotdanit = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    //console.log('>>>Check req.body', req.body)
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    //let {email, name, city} = req.body

    console.log('email=', email, ' name = ', name, ' city= ', city)

    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUE(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create user succeed');
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUE(?, ?, ?)`,
        [email, name, city],
    );
    res.send('Create user succeed');
    // const [results, fields] = await connection.query('SELECT * FROM Users');
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    // console.log(">>>Check user = ", results)
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('edit.ejs', {userEdit : user})// x <- y
}

module.exports = {
    getHomepage, getABC, hotdanit, postCreateUser, getCreatePage, getUpdatePage
}