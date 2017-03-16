const uuid = require('node-uuid')
const jwt = require('jsonwebtoken')
const config = require('config-lite')
const UserProxy = require('../../proxy').User
const tools = require('../../util/tools')

exports.getList = function (req, res, next) {
  UserProxy.get().then(function (list) {
    res.render('admin/user_list', {
      list: list,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getAdd = function (req, res, next) {
  res.render('admin/user_add', {
    layout: 'admin'
  })
}

exports.postAdd = function (req, res, next) {
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
    UserProxy.create(params).then(function (model) {
      req.flash('info', {
        message: '添加成功'
      })
      res.redirect('/admin/user_list')
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getEdit = function (req, res, next) {
  const _id = req.params._id
  UserProxy.getBy_Id(_id).then(function (model) {
    res.render('admin/user_edit', {
      model: model,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.postEdit = function (req, res, next) {
  const _id = req.body._id
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
        req.flash('info', { message: '编辑成功' })
        res.redirect('/admin/user_list')
      })
    })
  } else {
    UserProxy.update(params).then(function (model) {
      req.flash('info', { message: '编辑成功' })
      res.redirect('/admin/user_list')
    }).catch(function (err) {
      return next(err)
    })
  }
}

exports.getRemove = function (req, res, next) {
  const _id = req.params._id
  UserProxy.remove(_id).then(function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('/admin/user_list')
  }).catch(function (err) {
    return next(err)
  })
}
