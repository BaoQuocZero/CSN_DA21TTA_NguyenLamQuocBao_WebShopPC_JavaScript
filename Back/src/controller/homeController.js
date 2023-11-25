import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render("index.ejs", { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM user where id= ?`, [userId]);
    return res.send(JSON.stringify(user[0]))
}

let createNewUser = async (req, res) => {
    console.log(">>>Check: ", req.body)
    let { firstName, lastName, email, address } = req.body;
    let [user] = await pool.execute(`
    INSERT INTO user (firstName , lastName, email, address) VALUES (?, ?, ?, ?)`,
        [firstName, lastName, email, address]);
    return res.redirect('/')
}

module.exports = {
    getHomePage, getDetailPage, createNewUser
}