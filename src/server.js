require('dotenv').config()
const express = require('express')//commonjs
//const path = require('path')//commonjs
const confitViewEngine = require('./config/viewEngine');
const webRouter = require('./routers/web')

//console.log(">>>Check env: ", process.env);

const app = express()//add express
const port = process.env.PORT || 8888;//port => hardcore .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
confitViewEngine(app);

//khai báo route
app.use('/', webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})