const mongoose = reuqire('mongoose')
const Schema = mongoose.Schema
const shortenerSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  randCode: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Shortener', shortenerSchema)
