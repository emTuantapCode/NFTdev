const express = require('express')
const router = express.Router()

const projectoverviewcontroller = require('../app/controllers/AddBoxController')

router.get('/',projectoverviewcontroller.create)

module.exports = router;
