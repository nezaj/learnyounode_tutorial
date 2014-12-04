// Returns number of lines for a file in an async fashion, similar to cat file | wc -l
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function(err, contents) {
    if (err) return console.error(err)
    var numLines = contents.split('\n').length - 1;
    console.log(numLines);
})
