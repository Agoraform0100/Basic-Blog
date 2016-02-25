
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/goodbye', function (req, res) {
  res.send('Hello Goodbye')
})

// app.use(express.static('landing.html'));
// app.use(express.static('stylesheet.css'));

app.use(express.static('.'))

app.listen(3000)
