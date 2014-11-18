// JUGGLING ASYNC
// Exercise 9 of 13
//
// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.
//
// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http')
var concat = require('concat-stream')

var callbackCount = 0
var results = []
var urls = process.argv.slice(2)


function printResults () {
  for (var i = 0; i < results.length; i++)
    console.log(results[i])
}

function httpGet (index) {
  var url = urls[index]

  http.get(url, function(response) {
    response.setEncoding('utf8')

    response.pipe(concat(function (data) {
      results[index] = data
      callbackCount++

      // On the last one!
      if (callbackCount === urls.length)
        printResults()
    }))

    response.on('error', console.error)
  })
}

for (var i = 0; i < urls.length; i++)
  httpGet(i)
