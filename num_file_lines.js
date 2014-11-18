// Returns number of lines for a file, similar to cat file | wc -l
var fs = require('fs')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(lines)
