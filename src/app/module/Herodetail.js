const mongoose = require('mongoose')
const { Schema } = mongoose

const Herodetail = new Schema({ 
  name: String,
  species: String,
  gender: String,
  class: String,
  occupation: String,
  faction: String,
  decscription: String,
})

module.exports = mongoose.model('herodetail', Herodetail);
