const { multiMongooestoObject } = require('../../util/mongooes')
const { mongooestoObject } = require('../../util/mongooes')
const Boxsales = require('../../app/module/Boxsale')
const Heroinfos = require('../../app/module/heroinfo')

class HeroBoxController {
    show(req, res, next) {
        Boxsales.find({})
            .then(boxsales => res.render('herobox', {
                boxsales: multiMongooestoObject(boxsales)
            }))
            .catch(next)
    }
    showbox(req, res, next) {
        Boxsales.findOne({ slug: req.params.slug })
            .then((boxsale)=> res.render('boxdetail', {
                boxsale: mongooestoObject(boxsale),
            }))
            .catch(next) 
    }
}

   module.exports = new HeroBoxController;
