const UserProxy = require('../proxy').User
const auth = require('../middlewares/auth')
const tools = require('../util/tools')

exports.get = function (req, res, next) {
  res.render('signin', {
    layout: null
  })
}

exports.login = function (req, res, next) {
  const name = req.body.name.toLowerCase()
  const password = req.body.password
  UserProxy.getOne({ name: name }).then(function (user) {
    const error = {
      is: true,
      messgae: ''
    }
    if (!user) {
      error.is = false
      error.message = '用户名错误'
    }
    if (!user.isEnable) {
      error.is = false
      error.message = '账户已禁用'
    }
    if (!error.is) {
      req.flash('error', {
        message: error.message
      })
      return res.redirect('signin')
    }
    const passhash = user.password
    tools.bcompare(password, passhash).then(function (bool) {
      if (bool) {
        auth.gen_session(user, res)
        res.redirect('/admin')
      } else {
        req.flash('error', {
          message: '密码错误'
        })
        res.redirect('signin')
      }
    })
  }).catch(function (err) {
    return next(err)
  })
}
