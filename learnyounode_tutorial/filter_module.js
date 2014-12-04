// Exports a function which filters a directory for files with a specific file extension
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);

        var list = list.filter(function (file) {
            if (path.extname(file) === '.' + filterStr)
                return file
        });

        callback(null, list)
    });
}
