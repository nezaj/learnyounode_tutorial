// Uses filter module to log files in a directory with a specific file extension
var filterFn = require('./filter_module.js')

var dir = process.argv[2],
    filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    });
});
