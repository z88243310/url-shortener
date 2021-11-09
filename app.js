const express = require('express')
const exphbs = require('express-handlebars')
const Shortener = require('./models/shortener')
const isUrl = require('is-url')
const generatedRandomCode = require('./models/generateRandomCode')
const app = express()
const PORT = process.env.PORT || 3000

// connect to mongoDB
require('./config/mongoose')

// set express-handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))

// 首頁
app.get('/', (req, res) => {
  res.render('index')
})

// Create : if exit , redirect show page
app.post('/', (req, res) => {
  const primitiveURL = req.body.primitiveURL
  // check url
  if (!isUrl(primitiveURL)) return res.render('index', { invalidURL: true })

  Shortener.findOne({ url: primitiveURL })
    .lean()
    .then((shortener) => {
      if (shortener === null)
        Shortener.create({ url: primitiveURL, randCode: generatedRandomCode() })
          .then((shortener) => res.redirect(`/show/${shortener.randCode}`))
          .catch((error) => console.log(error))
      else {
        res.redirect(`/show/${shortener.randCode}`)
      }
    })
    .catch((error) => console.log(error))
})

// Show shortenURL
app.get('/show/:randCode', (req, res) => {
  const randCode = req.params.randCode
  const domain = req.headers.host + '/' + randCode
  Shortener.findOne({ randCode })
    .lean()
    .then((shortener) => res.render('show', { shortener, domain }))
    .catch((error) => console.log(error))
})

// Handle shortenURL
app.get('/:randCode', (req, res) => {
  Shortener.findOne({ randCode: req.params.randCode })
    .lean()
    .then((shortener) => {
      res.redirect(shortener.url)
    })
    .catch((error) => console.log(error))
})

// listening server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
