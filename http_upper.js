//  HTTP UPPERCASERER
//  Exercise 12 of 13
//
// Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.
//
// Your server should listen on the port provided by the first argument to your program.
var http = require('http')
var map = require('through2-map')

var port = Number(process.argv[2])
var server = http.createServer(function (request, response) {
  if (request.method != 'POST')
    return response.end('send me a POST!\n')

  function toUpper(chunk) {
    return chunk.toString().toUpperCase()
  }

  request.pipe(map(toUpper)).pipe(response)
});

server.listen(port, 'localhost')
