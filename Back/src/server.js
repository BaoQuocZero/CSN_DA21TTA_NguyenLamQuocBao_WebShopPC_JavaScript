import express from "express"
import configViewEngine from "./views/viewEngine"

const app = express()
const port = 8080

configViewEngine(app);

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/about', (req, res) => {
    res.send(`I'm Eric`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})