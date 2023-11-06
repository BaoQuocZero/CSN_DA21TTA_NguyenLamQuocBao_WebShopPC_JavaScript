require('dotenv').config()
const express = require('express')//commonjs
//const path = require('path')//commonjs
const confitViewEngine = require('./config/viewEngine');
const webRouter = require('./routers/web')
// get the client
const mysql = require('mysql2');

const app = express()//add express
const port = process.env.PORT || 8888;//port => hardcore .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
confitViewEngine(app);

//khai báo route
app.use('/', webRouter);

//Test connection
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})