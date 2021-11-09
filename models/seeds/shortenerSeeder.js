const mongoose = require('mongoose')
const Shortener = require('../shortener')
const generateRandomCode = require('../generateRandomCode')

const db = require('../../config/mongoose')

db.once('open', () => {
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
