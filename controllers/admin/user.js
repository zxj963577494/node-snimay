const eventproxy = require('eventproxy')
const UserProxy = require('../../proxy').User
const tools = require('../../util/tools')

exports.getList = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('list', function (list) {
    res.render('admin/user_list', {
      list: list,
      layout: 'admin'
    })
  })

  UserProxy.getUsers(ep.done('list'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
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

  const ep = new eventproxy()
  ep.all('model', function (model) {
    req.flash('info', {
      message: '添加成功'
    })
    res.redirect('/admin/user_list')
  })

  tools.bhash(password, ep.done(function (passhash) {
    UserProxy.newAndSave(name, email, isEnable, passhash, ep.done('model'))
  }))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getEdit = function (req, res, next) {
  const _id = req.query._id
  const ep = new eventproxy()
  ep.all('model', function (model) {
    res.render('admin/user_edit', {
      model: model,
      layout: 'admin'
    })
  })
  UserProxy.getById(_id, ep.done('model'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.postEdit = function (req, res, next) {
  const _id = req.body._id
  const name = req.body.name
  const email = req.body.email
  const isEnable = req.body.isEnable
  const password = req.body.password

  const ep = new eventproxy()
  ep.all('model', function (model) {
    req.flash('info', { message: '编辑成功' })
    res.redirect('/admin/user_list')
  })
  if (password) {
    tools.bhash(password, ep.done(function (passhash) {
      UserProxy.update(_id, name, email, isEnable, passhash, ep.done('model'))
    }))
  } else {
    UserProxy.update(_id, name, email, isEnable, password, ep.done('model'))
  }
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getRemove = function (req, res, next) {
  const _id = req.query._id
  UserProxy.remove(_id, function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('/admin/user_list')
  })
}
