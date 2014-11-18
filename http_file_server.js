// HTTP FILE SERVER
// Exercise 11 of 13
//
// Write an HTTP server that serves the same text file for each request it receives.
//
// Your server should listen on the port provided by the first argument to your program.
//
// You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.
var fileSystem = require('fs')
var http = require('http')

var port = Number(process.argv[2])
var outputFile = process.argv[3]

var server = http.createServer(function (request, response) {
  var stat = fileSystem.statSync(outputFile)
  response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': stat.size
  })

  var readStream = fileSystem.createReadStream(outputFile)
  readStream.pipe(response)
});

server.listen(port, 'localhost')
