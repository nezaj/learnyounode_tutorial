//   #####################################################################
//   ##                         ~~  STATIC  ~~                          ##
//   #####################################################################
//
// Apply static middleware to serve index.html file without any routes. Your solution must listen on the port number supplied by process.argv[2]. The index.html file is provided and usable via process.argv[3] value of the path to it. However, you can use your own file with this content:

var express = require('express')

var port = Number(process.argv[2])
var app = express()

app.use(express.static(__dirname + '/public'))

app.listen(port)
