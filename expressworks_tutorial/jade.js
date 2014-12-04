// Use jade to render /home with a template
var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')

var port = Number(process.argv[2])
var app = express()

// Point to templates directory
app.set('views', path.join(__dirname, 'templates'))

// Use jade to render templates
app.set('view engine', 'jade')

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(port)
