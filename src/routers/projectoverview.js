const express = require('express')
const router = express.Router()

const projectoverviewcontroller = require('../app/controllers/ProjectOverviewController')

router.get('/',projectoverviewcontroller.index)

module.exports = router;
