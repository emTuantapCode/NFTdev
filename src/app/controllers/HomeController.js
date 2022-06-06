const { multiMongooestoObject } = require('../../util/mongooes')
const Herodetail = require('../../app/module/Herodetail')

class HomeController {
    index(req,res,next) {
        Herodetail.find({})
            .then(herodetail => res.render('home',{
                herodetail : multiMongooestoObject(herodetail)
            }))
            .catch(next)
    }
}

module.exports = new HomeController;
