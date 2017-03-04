const ConsultProxy = require('../../proxy').Consult

exports.getList = function (req, res, next) {
  ConsultProxy.get('_id name tel isRead remark', {}).then(function (list) {
    res.render('admin/consult_list', {
      list: list,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getEdit = function (req, res, next) {
  const _id = req.params._id
  ConsultProxy.getBy_Id(_id).then(function (model) {
    res.render('admin/consult_edit', {
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
  const tel = req.body.tel
  const isRead = req.body.isRead
  const remark = req.body.remark
  const params = {
    _id, name, tel, isRead, remark
  }

  ConsultProxy.update(params).then(function (model) {
    req.flash('info', { message: '编辑成功' })
    res.redirect('/admin/consult_list')
  }).catch(function (err) {
    return next(err)
  })
}

exports.getRemove = function (req, res, next) {
  const _id = req.params._id
  ConsultProxy.remove(_id).then(function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('/admin/consult_list')
  }).catch(function (err) {
    return next(err)
  })
}
