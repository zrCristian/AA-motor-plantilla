const express = require("express")
const indexController = require("../controllers")

const router = express.Router()

router.get("/", indexController)

module.exports = router