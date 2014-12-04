//   #####################################################################
//   ##                         ~~  JSON ME  ~~                         ##
//   #####################################################################
//
// Write a server that reads a file (file name is passed in process.argv[3]), parses it to JSON and outputs the content to the user with res.json(object). Everything should match to the 'books' resource.
//

var express = require('express')
  , fs = require('fs')

var app = express()
  , file = process.argv[3]
  , port = Number(process.argv[2])

app.get('^/books$', function(req, res) {
  fs.readFile(file, function(err, data) {
    if (err) return res.send(500)
    try {
      books = JSON.parse(data)
    } catch (error) {
      res.send(500)
    }
    res.json(books)
  })
})

app.listen(port)
