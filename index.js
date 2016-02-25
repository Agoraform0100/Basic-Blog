
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/goodbye', function (req, res) {
  res.send('Hello Goodbye')
})

<<<<<<< HEAD
app.use(express.static(.));
=======
// app.use(express.static('landing.html'));
// app.use(express.static('stylesheet.css'));

app.use(express.static('.'))
>>>>>>> 45ee82b90b002fae7459bc1eb07e93ed303f5ea6

app.listen(3000)
