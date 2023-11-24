import connection from "../configs/connectDB"

let getHomePage = (req, res) => {

    let data = []
    // simple query
    connection.query(
        'SELECT * FROM `user`',
        function (err, results, fields) {
            console.log(">>> Check mysql")
            console.log(results); // results contains rows returned by server
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            });
            return res.render("index.ejs", { dataUser: data })
        }
    );


}

module.exports = {
    getHomePage
}