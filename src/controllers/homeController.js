const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! and nodemon')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const hotdanit = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, hotdanit
}