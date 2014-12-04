//  HTTP JSON API SERVER
//  Exercise 13 of 13
//
// Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
//
// For example:
//
//   /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
// The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
//
//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }
//
// Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:
//
//     { "unixtime": 1376136615474 }
//
// Your server should listen on the port provided by the first argument to your program.
var http = require('http')
var url = require('url')

var port = Number(process.argv[2])
var parseTimeRoute = '/api/parsetime'
var unixTimeRoute = '/api/unixtime'

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return {
    unixtime: time.getTime()
  }
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathName = parsedUrl.pathname
  var time = new Date(parsedUrl.query.iso)
  var result

  if (pathName === parseTimeRoute)
    result = parsetime(time)
  else if (pathName === unixTimeRoute)
    result = unixtime(time)

  if (result) {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(result))
  } else {
    response.writeHead(404)
    response.end('404 -- Page nout found')
  }
});

server.listen(port, 'localhost')
