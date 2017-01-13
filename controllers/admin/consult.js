const eventproxy = require('eventproxy')
const ConsultProxy = require('../../proxy').Consult

exports.getList = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('list', function (list) {
    res.render('admin/consult_list', {
      list: list,
      layout: 'admin'
    })
  })

  ConsultProxy.getConsults(ep.done('list'))

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
    res.render('admin/consult_edit', {
      model: model,
      layout: 'admin'
    })
  })
  ConsultProxy.getById(_id, ep.done('model'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.postEdit = function (req, res, next) {
  const _id = req.body._id
  const name = req.body.name
  const tel = req.body.tel
  const isRead = req.body.isRead
  const remark = req.body.remark

  const ep = new eventproxy()
  ep.all('model', function (model) {
    req.flash('info', {message: '编辑成功'})
    res.redirect('/admin/consult_list')
  })

  ConsultProxy.update(_id, name, tel, isRead, remark, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getRemove = function (req, res, next) {
  const _id = req.query._id
  ConsultProxy.remove(_id, function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('/admin/consult_list')
  })
}
