const mongoose = require('mongoose')
const Shortener = require('../shortener')
const generateRandomCode = require('../generateRandomCode')

mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  const seedArray = Array.from(Array(10).keys()).map((num) => ({
    url: `https://www.google.com.tw/${num}`,
    randCode: generateRandomCode(),
  }))
  Shortener.insertMany(seedArray)
    .catch((err) => console.log(err))
    .finally(() => {
      console.log('data is created!')
      process.exit()
    })
})
