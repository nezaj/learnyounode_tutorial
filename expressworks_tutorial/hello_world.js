//   #####################################################################
//   ##                      ~~  HELLO WORLD!  ~~                       ##
//   #####################################################################
//
// Create an Express.js app that runs on localhost:3000, and outputs "Hello World!" when somebody goes to '/home'.
// The port number will be provided to you by expressworks as the first argument of the application, ie. process.argv[2].

var express = require('express')

var port = Number(process.argv[2])
var app = express()

app.get('/home', function(req, res) {
  res.end("Hello World!")
})

app.listen(port)
