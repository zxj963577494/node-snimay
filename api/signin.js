const UserProxy = require('../proxy').User
const tools = require('../util/tools')

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
      return res.status(401).json({
        message: error.message
      })
    }
    const passhash = user.password
    tools.bcompare(password, passhash).then(function (bool) {
      if (bool) {
        res.status(200).json({
          token: user.token
        })
      } else {
        res.status(401).json({
          message: '密码错误'
        })
      }
    })
  }).catch(function (err) {
    return next(err)
  })
}
