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
  CategoryProxy.getCategories_Admin({}, ep.done('list'))
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

  CategoryProxy.getById_Admin(_id, ep.done('model'))

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
