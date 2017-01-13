const eventproxy = require('eventproxy')
const ConsultProxy = require('../../proxy').Consult

function get (req, res, next) {
  const ep = new eventproxy()
  ep.all('notReadCount', function (notReadCount) {
    res.render('/admin', {
      admin: {
        notReadCount: notReadCount
      },
      layout: 'admin'
    })
  })

  ConsultProxy.getNotReadCount(ep.done('notReadCount'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

module.exports = {
  get
}
