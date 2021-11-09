const express = require('express')
const app = express()

const PORT = 3000

// 首頁
app.get('/', (req, res) => {
  res.send('hello world')
})

// listening server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
