const express = require('express')
const router = express.Router()
const homecontroller = require('../app/controllers/HomeController')

// Handlebars.registerPartial('herobook-nav', $('#p').html())

router.get('/',homecontroller.index)

module.exports = router;
