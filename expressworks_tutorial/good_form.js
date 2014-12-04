//   #####################################################################
//   ##                      ~~  GOOD OLD FORM  ~~                      ##
//   #####################################################################
//
// Write a route ('/form') that processes HTML form input (<form><input name="str"/></form>) and prints backwards the str value.

var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')

var port = Number(process.argv[2])
var app = express()

// Point to templates directory
app.set('views', path.join(__dirname, 'templates'))

// Use jade to render templates
app.set('view engine', 'jade')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.post('/form', function(req, res) {
  if (!req.body.str) return res.sendStatus(400)
  var reversed = req.body.str.split('').reverse().join('')
  res.send(reversed)
})
app.listen(port)

