const projectoverviewRouter = require('./projectoverview')
const addboxRouter = require('./addbox')
const heroboxRouter = require('./herobox')
const homeRounter = require('./home')


function route(app){
    app.use('/herobox',heroboxRouter)
    app.use('/createbox',addboxRouter)
    app.use('/projectoverview',projectoverviewRouter)
    app.use('/',homeRounter)
}

module.exports = route;
