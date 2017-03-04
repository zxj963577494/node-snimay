const BannerProxy = require('../../proxy').Banner

exports.getList = function (req, res, next) {
  BannerProxy.get_Admin().then(function (list) {
    res.render('admin/banner_list', {
      list: list,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getAdd = function (req, res, next) {
  res.render('admin/banner_add', {
    layout: 'admin'
  })
}

exports.postAdd = function (req, res, next) {
  const title = req.body.title
  const sort = req.body.sort || 1
  const isVisible = req.body.isVisible
  const endTime = new Date(req.body.endTime)
  const startTime = new Date(req.body.startTime)
  const pic = req.body.pic
  const link = req.body.link
  const description = req.body.description
  const price = req.body.price

  const params = {
    title,
    sort,
    isVisible,
    endTime,
    startTime,
    pic,
    link,
    description,
    price
  }

  BannerProxy.create(params).then(function (model) {
    req.flash('info', {
      message: '添加成功'
    })
    res.redirect('/admin/banner_list')
  }).catch(function (err) {
    return next(err)
  })
}

exports.getEdit = function (req, res, next) {
  const _id = req.params._id
  BannerProxy.getBy_Id(_id).then(function (model) {
    res.render('admin/banner_edit', {
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
  const endTime = new Date(req.body.endTime)
  const startTime = new Date(req.body.startTime)
  const pic = req.body.pic
  const link = req.body.link
  const description = req.body.description
  const price = req.body.price

  const params = {
    _id,
    title,
    sort,
    isVisible,
    endTime,
    startTime,
    pic,
    link,
    description,
    price
  }

  BannerProxy.update(params).then(function () {
    req.flash('info', {
      message: '编辑成功'
    })
    res.redirect('/admin/banner_list')
  }).catch(function (err) {
    return next(err)
  })
}

exports.getRemove = function (req, res, next) {
  const _id = req.params._id
  BannerProxy.remove(_id).then(function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('/admin/banner_list')
  }).catch(function (err) {
    return next(err)
  })
}

