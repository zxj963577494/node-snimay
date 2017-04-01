const ConsultProxy = require('../proxy').Consult

exports.List = function (req, res, next) {
  let sortby = req.query.sortby || 'createTime'
  let order = req.query.order === 'asc' ? 1 : req.query.order === 'desc' ? -1 : -1
  let pageIndex = parseInt(req.query.pageindex) || 1
  let pageSize = parseInt(req.query.pagesize) || 12
  let query = {
    sort: {
      [sortby]: order
    },
    pageIndex: pageIndex,
    pageSize: pageSize
  }
  ConsultProxy.API_GetByPage('', {}, query).then(function (list) {
    res.status(200).json(list)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Add = function (req, res, next) {
  const name = req.body.name
  const tel = req.body.tel
  const isRead = 0
  const remark = ''

  const params = {
    name, tel, isRead, remark
  }

  ConsultProxy.create(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Model = function (req, res, next) {
  const id = req.params._id
  ConsultProxy.API_GetById(id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Edit = function (req, res, next) {
  const _id = req.params._id
  const name = req.body.name
  const tel = req.body.tel
  const isRead = req.body.isRead
  const remark = req.body.remark
  const params = {
    _id, name, tel, isRead, remark
  }

  ConsultProxy.update(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Delete = function (req, res, next) {
  const _id = req.params._id
  ConsultProxy.remove(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}
