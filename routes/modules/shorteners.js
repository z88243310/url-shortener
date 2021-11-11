// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// mongoose do something module
const Shortener = require('../../models/shortener')
// show error message
const errorHandler = require('../../models/errorHandler')

// Show shortenURL
router.get('/:randCode', (req, res) => {
  const randCode = req.params.randCode
  const domain = req.protocol + '://' + req.headers.host + '/' + randCode
  Shortener.findOne({ randCode })
    .lean()
    .then((shortener) => res.render('show', { shortener, domain }))
    .catch((error) => errorHandler(error, res))
})

// 匯出路由模組
module.exports = router
