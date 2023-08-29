const path = require("path")

const indexController = (req, res) => {
    // res.sendFile(path.resolve(__dirname, "../views/index.html"))
    res.render("index", {
        name: "Cristian Rafael Zamora",
        isDeveloper: true,
    })    
} 

module.exports = indexController