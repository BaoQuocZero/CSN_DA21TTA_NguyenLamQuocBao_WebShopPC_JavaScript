const express = require('express')
const path = require('path')
require('dotenv').config()

console.log(">>>Check env: ", process.env);

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World! and nodemon')
})

app.get('/abc', (req, res) => {
  res.send('Check ABC')
})

app.get('/hoidanit', (req, res) => {
  //res.send('<h1>Hoi dan IT</h1>')
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})