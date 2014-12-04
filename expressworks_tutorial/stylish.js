//   #####################################################################
//   ##                       ~~  STYLISH CSS  ~~                       ##
//   #####################################################################
//
// Style your HTML from previous example with some Stylus middleware. Your solution must listen on the port number supplied by process.argv[2]. The path containing the HTML and Stylus files is provided in process.argv[3] (they are in the same directory). You can create your own folder and use these:
//
// The main.styl file:
//
//   p
//     color red
//
// The index.html file:
//
//   <html>
//     <head>
//       <title>expressworks</title>
//       <link rel="stylesheet" type="text/css" href="/main.css"/>
//     </head>
//     <body>
//       <p>I am red!</p>
//     </body>
//   </html>

var express = require('express')
  , stylus = require('stylus')

var app = express()
  , port = Number(process.argv[2])

// Serve stylus files
app.use(stylus.middleware(__dirname + '/public'))

// Serve static content
app.use(express.static(__dirname + '/public'))

app.listen(port)
