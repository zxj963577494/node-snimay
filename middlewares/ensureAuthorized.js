const config = require('config-lite')
const Promise = require('bluebird')
const jwt = Promise.promisifyAll(require('jsonwebtoken'))

exports.ensureAuthorized = function (req, res, next) {
  let bearerToken
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    bearerToken = bearer[1]
    req.token = bearerToken
    jwt.verifyAsync(req.token, config.JWT_SECRET).then(function (decoded) {
      req.userid = decoded.userid
      next()
    }).catch(function (err) {
      res.status(401).json({ message: 'Bad credentials' })
    })
  } else {
    res.status(401).json({
      message: 'Bad credentials'
    })
  }
}
