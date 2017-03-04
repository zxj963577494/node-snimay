const Consult = require('../proxy').Consult

exports.init = function (req, res, next) {
  Consult.getNotReadCount().then(function (notReadCount) {
    res.locals.admin = {
      notReadCount: notReadCount
    }
    next()
  })
}
