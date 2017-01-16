const eventproxy = require('eventproxy')
const CategoryProxy = require('../../proxy').Category

exports.getList = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('list', function (list) {
    res.render('admin/category_list', {
      list: list,
      layout: 'admin'
    })
  })
  CategoryProxy.get('_id id title alias isVisible sort', {}, ep.done('list'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getEdit = function (req, res, next) {
  const _id = req.params._id

  const ep = new eventproxy()
  ep.all('model', function (model) {
    res.render('admin/category_edit', {
      model: model,
      layout: 'admin'
    })
  })

  CategoryProxy.getBy_Id(_id, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.postEdit = function (req, res, next) {
  const _id = req.body._id
  const title = req.body.title
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const params = {
    _id, title, sort, isVisible
  }
  const ep = new eventproxy()
  ep.all('category', function (category) {
    req.flash('info', {
      message: '编辑成功'
    })
    res.redirect('/admin/category_list')
  })

  CategoryProxy.update(params, ep.done('category'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.postAdd = function (req, res, next) {
  const title = req.body.title
  const sort = req.body.sort
  const alias = req.body.alias
  const isVisible = req.body.isVisible
  const params = {
    title, alias, sort, isVisible
  }
  const ep = new eventproxy()
  ep.all('category', function (category) {
    req.flash('info', {
      message: '添加成功'
    })
    res.redirect('/admin/category_list')
  })

  CategoryProxy.create(params, ep.done('category'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getAdd = function (req, res, next) {
  res.render('admin/category_add', {
    layout: 'admin'
  })
}
