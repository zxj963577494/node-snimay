const eventproxy = require('eventproxy')
const UserProxy = require('../proxy').User
const auth = require('../middlewares/auth')
const tools = require('../util/tools')

exports.get = function (req, res, next) {
  res.render('signin', {
    layout: null
  })
}

exports.login = function (req, res, next) {
  var name = req.body.name.toLowerCase()
  var password = req.body.password
  var ep = new eventproxy()

  ep.on('login_error', function (loginError) {
    req.flash('error', {
      message: '用户名或密码错误，或者账户已禁用'
    })
    res.redirect('signin')
  })

  UserProxy.getOne({ name: name }, function (err, user) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return ep.emit('login_error')
    }
    if (!user.isEnable) {
      return ep.emit('login_error')
    }
    let passhash = user.password
    tools.bcompare(password, passhash, ep.done(function (bool) {
      if (bool) {
        auth.gen_session(user, res)
        res.redirect('/admin')
      } else {
        return ep.emit('login_error')
      }
    }))
  })

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
