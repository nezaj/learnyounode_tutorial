// Returns number of lines for a file in an async fashion, similar to cat file | wc -l
var fs = require('fs')
var path = require('path')

var dir = process.argv[2],
    ext = process.argv[3]

fs.readdir(dir, function (err, list) {
    if (err) return console.error(err);
    list.forEach(function (file) {
        if (path.extname(file) === '.' + ext.toString())
            console.log(file);
    })
});
