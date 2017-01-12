const config = require('config-lite')

// sign out
exports.signout = function (req, res, next) {
  req.session.destroy()
  res.clearCookie(config.cookie, { path: '/' })
  res.redirect('/')
}
