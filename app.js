const express = require('express')
const app = express()
const ejs = require('ejs')
const fetch = require('node-fetch')

// api key
const myKey = '1621e77648a0dbcbe0584621000f6701'

app.use(express.static('public'))
app.set('view engine', 'ejs')

// function temp k to C
function ktoC(k) {
  return (k - 273.15).toFixed(2);
}

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/:city', (req, res) => {
  let {city} = req.params
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`
  
  fetch(url)
    .then((d) => d.json())
    .then((djs) => {
      let {temp} = djs.main
      let newTemp = ktoC(temp)
      res.render('weather.ejs', {djs, newTemp})
    })
})

app.listen(3000, () => {
  console.log('Sever is running on port 3000.')
})