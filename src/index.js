const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const db = require('./config/db')
db.connect()

const app = express()

const route = require('./routers')
const { render } = require('express/lib/response')

// Morgan
app.use(morgan('combined'))
// Engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, 'resoures/views'))

app.use(express.static(path.join(__dirname, 'public')))
//
// Route
route(app)

app.listen(3000)

