const mongoose = require('mongoose')
const { Schema } = mongoose

const Boxsale = new Schema({ 
  image: String,
  name: String,
  price: String,
  decscription: String,
  slug: String,
  originrate: [{type:String}],
  chormasrate: [{type:String}],
  prestigerate: [{type:String}]
})

module.exports = mongoose.model('heroboxs', Boxsale);
