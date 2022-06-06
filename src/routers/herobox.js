const express = require('express')
const router = express.Router()

const heroboxcontroller = require('../app/controllers/HeroBoxController')

router.get('/:slug', heroboxcontroller.showbox)
router.get('/', heroboxcontroller.show)

module.exports = router;
