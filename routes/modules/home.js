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
  res.render('index', { url: req.query.url })
})

// Create : if exit , redirect show page
router.post('/', (req, res) => {
  const primitiveURL = req.body.primitiveURL
  // 檢查網址，不合規定直接返回首頁，顯示錯誤訊息
  if (!isUrl(primitiveURL)) return res.render('index', { invalidURL: true, url: primitiveURL })

  Shortener.findOne({ url: primitiveURL })
    .lean()
    .then((shortener) => {
      // 新輸入網址，先存入資料庫，再導向縮址頁面
      if (shortener === null)
        Shortener.create({ url: primitiveURL, randCode: generateRandomCode() })
          .then((shortener) => res.redirect(`/shorteners/${shortener.randCode}`))
          .catch((error) => errorHandler(error, res))
      // 已存在此網址，直接導向縮址頁面
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
