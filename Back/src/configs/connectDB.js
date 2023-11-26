import mysql from 'mysql2/promise'

// create the connection to database

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ShopPC_data'
});

// const pool = mysql.createPool({
//     host: 'localhost',
//     port: 3307,
//     user: 'root',
//     password: '0000',
//     database: 'ShopPC_data'
// });

export default pool;