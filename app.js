const express = require('express')
const app = express()
const ejs = require('ejs')

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(3000, () => {
  console.log('Sever is running on port 3000.')
})