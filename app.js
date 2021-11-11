const express = require('express')
const exphbs = require('express-handlebars')

// 引用路由器
const routes = require('./routes')

// set express
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

app.use(routes)

// listening server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
