//   #####################################################################
//   ##                     ~~  WHAT'S IN QUERY  ~~                     ##
//   #####################################################################
//
// Write a route that extracts data from query string in the GET '/search' URL route, e.g.,
// ?results=recent&include_tabs=true, and then outputs it back to the user in JSON format.
//

var express = require('express')

var app = express()
  , port = Number(process.argv[2])

app.get('^/search$', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(req.query))
})

app.listen(port)
