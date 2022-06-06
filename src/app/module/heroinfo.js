const mongoose = require('mongoose')
const { Schema } = mongoose

const Heroinfos = new Schema({ 
    class: String,
    classimg: String,
    level: String,
    name: String,
    rality: String,
    ralityimg: String,
    skill: String,
    skillimg: String,
    health: String,
    damage: String,
    agiltily: String
})

module.exports = mongoose.model('heroinfos', Heroinfos);
