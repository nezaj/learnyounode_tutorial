//   #####################################################################
//   ##                      ~~  PARAM PAM PAM  ~~                      ##
//   #####################################################################
//
// Create an Express.js server that processes PUT '/message/:id' requests, e.g., PUT '/message/526aa677a8ceb64569c9d4fb'
//
// As the response of this request return id SHA1 hashed with a date:
//
//   require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')

var crypto = require('crypto')
  , express = require('express')

var app = express()
  , port = Number(process.argv[2])

function hashed_id (id) {
  return crypto.createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
}

app.put('/message/:id', function(req, res) {
  res.writeHead(200)
  res.end(hashed_id(req.params.id))
})

app.listen(port)
