const express = require('express')
const exphbs = require('express-handlebars')
const Shortener = require('./models/shortener')
const os = require('os')
const generatedRandomCode = require('./models/generateRandomCode')
const app = express()
const PORT = 3000

// connect to mongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// set express-handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))

// 首頁
app.get('/', (req, res) => {
  res.render('index')
})

// Create
app.post('/', (req, res) => {
  const primitiveURL = req.body.primitiveURL
  Shortener.create({ url: primitiveURL, randCode: generatedRandomCode() })
    .then((shortener) => res.redirect(`/show/${shortener.randCode}`))
    .catch((error) => console.log(error))
})

// Show shortenURL
app.get('/show/:randCode', (req, res) => {
  const domain = `${req.protocol}://${req.hostname}:${PORT}/${req.params.randCode}`
  Shortener.findOne({ randCode: req.params.randCode })
    .lean()
    .then((shortener) => res.render('show', { shortener, domain }))
    .catch((error) => console.log(error))
})

// listening server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
