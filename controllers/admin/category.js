const CategoryProxy = require('../../proxy').Category

exports.getList = function (req, res, next) {
  CategoryProxy.get('_id id title alias isVisible sort', {}).then(function (list) {
    res.render('admin/category_list', {
      list: list,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getEdit = function (req, res, next) {
  const _id = req.params._id
  CategoryProxy.getBy_Id(_id).then(function (model) {
    res.render('admin/category_edit', {
      model: model,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
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
  CategoryProxy.update(params).then(function (model) {
    req.flash('info', {
      message: '编辑成功'
    })
    res.redirect('/admin/category_list')
  }).catch(function (err) {
    return next(err)
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

  CategoryProxy.create(params).then(function (model) {
    req.flash('info', {
      message: '添加成功'
    })
    res.redirect('/admin/category_list')
  }).catch(function (err) {
    return next(err)
  })
}

exports.getAdd = function (req, res, next) {
  res.render('admin/category_add', {
    layout: 'admin'
  }).catch(function (err) {
    return next(err)
  })
}
