const eventproxy = require('eventproxy')
const Banner = require('../../proxy').Banner
const _ = require('lodash')

exports.getList = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('list', function (list) {
    res.render('admin/banner_list', {
      list: list,
      layout: 'admin'
    })
  })
  Banner.getBanners_Admin(ep.done('list'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getAdd = function (req, res, next) {
  res.render('admin/banner_add', {
    layout: 'admin'
  })
}

exports.postAdd = function (req, res, next) {
  const title = req.body.title
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const endTime = new Date(req.body.endTime)
  const startTime = new Date(req.body.startTime)
  const pic = req.body.pic
  const link = req.body.link
  const description = req.body.description
  const price = req.body.price

  const ep = new eventproxy()
  ep.all('model', function (model) {
    req.flash('info', {
      message: '添加成功'
    })
    res.redirect('/admin/banner_list')
  })

  Banner.newAndSave(title, sort, isVisible, endTime, startTime, pic, link, description, price, ep.done('model'))

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
    res.render('admin/banner_edit', {
      model: model,
      layout: 'admin'
    })
  })
  Banner.getBannerById(_id, ep.done('model'))
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
  const endTime = new Date(req.body.endTime)
  const startTime = new Date(req.body.startTime)
  const pic = req.body.pic
  const link = req.body.link
  const description = req.body.description
  const price = req.body.price

  const ep = new eventproxy()
  ep.all('model', function (model) {
    req.flash('info', {
      message: '编辑成功'
    })
    res.redirect('/admin/banner_list')
  })

  Banner.update(_id, title, sort, isVisible, endTime, startTime, pic, link, description, price, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getRemove = function (req, res, next) {
  const _id = req.query._id
  Banner.remove(_id, function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('/admin/banner_list')
  })
}
