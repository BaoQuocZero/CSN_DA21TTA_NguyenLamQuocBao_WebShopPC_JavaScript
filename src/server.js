require('dotenv').config()
const express = require('express')//commonjs
//const path = require('path')//commonjs
const confitViewEngine = require('./config/viewEngine');
const webRouter = require('./routers/web')
const connection = require('./config/database');
// get the client

const app = express()//add express
const port = process.env.PORT || 8888;//port => hardcore .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
confitViewEngine(app);

//khai báo route
app.use('/', webRouter);

// simple query
connection.query(
  'SELECT * FROM Users',
  function (err, results, fields) {
    console.log('>>>>results= ', results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})