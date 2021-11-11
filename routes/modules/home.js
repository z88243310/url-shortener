// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// mongoose do something module
const Shortener = require('../../models/shortener')
// generate a randCode module
const generateRandomCode = require('../../models/generateRandomCode')
// show error message
const errorHandler = require('../../models/errorHandler')

// check url valid
const isUrl = require('is-url')

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

// Create : if exit , redirect show page
router.post('/', (req, res) => {
  const primitiveURL = req.body.primitiveURL
  // check url
  if (!isUrl(primitiveURL)) return res.render('index', { invalidURL: true })

  Shortener.findOne({ url: primitiveURL })
    .lean()
    .then((shortener) => {
      if (shortener === null)
        Shortener.create({ url: primitiveURL, randCode: generateRandomCode() })
          .then((shortener) => res.redirect(`/shorteners/${shortener.randCode}`))
          .catch((error) => errorHandler(error, res))
      else {
        res.redirect(`/shorteners/${shortener.randCode}`)
      }
    })
    .catch((error) => errorHandler(error, res))
})

// Handle shortenURL
router.get('/:randCode', (req, res) => {
  Shortener.findOne({ randCode: req.params.randCode })
    .lean()
    .then((shortener) => {
      res.redirect(shortener.url)
    })
    .catch((error) => errorHandler(error, res))
})

// 匯出路由模組
module.exports = router
