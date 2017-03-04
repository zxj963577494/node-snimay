const ConsultProxy = require('../../proxy').Consult

function get (req, res, next) {
  ConsultProxy.getNotReadCount().then(function (notReadCount) {
    res.render('/admin', {
      admin: {
        notReadCount: notReadCount
      },
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

module.exports = {
  get
}
