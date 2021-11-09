const express = require('express')
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

// 首頁
app.get('/', (req, res) => {
  res.send('hello world')
})

// listening server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
