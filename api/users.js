const uuid = require('node-uuid')
const jwt = require('jsonwebtoken')
const config = require('config-lite')
const UserProxy = require('../proxy').User
const tools = require('../util/tools')

exports.List = function (req, res, next) {
  UserProxy.API_Get('', {}).then(function (list) {
    res.status(200).json(list)
  })
}

exports.Model = function (req, res, next) {
  const id = req.params._id
  UserProxy.API_GetById(id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Add = function (req, res, next) {
  const name = req.body.name
  const password = req.body.password
  const email = req.body.email
  const isEnable = req.body.isEnable
  const userid = uuid.v4()
  const token = jwt.sign({'userid': userid}, config.JWT_SECRET)

  const params = {
    name,
    password,
    email,
    isEnable,
    userid,
    token
  }

  tools.bhash(password).then(function (passhash) {
    params.password = passhash
    UserProxy.get({name: params.name}).then(function (user) {
      if (user.length === 0) {
        UserProxy.create(params).then(function (model) {
          res.status(200).json(model)
        })
      } else {
        res.status(401).json({message: '用户名已注册'})
      }
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.Edit = function (req, res, next) {
  const _id = req.params._id
  const name = req.body.name
  const email = req.body.email
  const isEnable = req.body.isEnable
  const password = req.body.password
  const params = {
    _id,
    name,
    password,
    email,
    isEnable
  }
  if (password) {
    tools.bhash(password).then(function (passhash) {
      params.password = passhash
      UserProxy.update(params).then(function (model) {
        res.status(200).json(model)
      })
    })
  } else {
    UserProxy.update(params).then(function (model) {
      res.status(200).json(model)
    }).catch(function (err) {
      return next(err)
    })
  }
}

exports.Delete = function (req, res, next) {
  const _id = req.params._id
  UserProxy.remove(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}
