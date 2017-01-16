var path = require('path')
var fs = require('fs')

exports.check = function (req, res, next) {
  fs.stat(path.join(__dirname, '../install.lock'), function (err, stat) {
    if (err && err.code === 'ENOENT') {
      res.redirect('/admin/install')
    } else if (err) {
      return next(err)
    }
    if (stat.isFile()) {
      next()
    } else {
      return next(err)
    }
  })
}
