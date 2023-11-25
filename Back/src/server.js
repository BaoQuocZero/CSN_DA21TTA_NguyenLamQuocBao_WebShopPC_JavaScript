import express from "express"
import configViewEngine from "./configs/viewEngine.js"
import initWebRoute from "./route/web.js"
// import connection from "./configs/connectDB.js"

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);
//initWebRouter
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})