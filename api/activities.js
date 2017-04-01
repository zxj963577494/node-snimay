const ActivityProxy = require('../proxy').Activity

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
  ActivityProxy.API_GetByPage('', {}, query).then(function (list) {
    res.status(200).json(list)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Add = function (req, res, next) {
  const title = req.body.title
  const isVisible = req.body.isVisible
  const endTime = new Date(req.body.endTime)
  const startTime = new Date(req.body.startTime)
  const pic = req.body.pic
  const description = req.body.description
  const content = req.body.content

  const params = {
    title,
    isVisible,
    endTime,
    startTime,
    pic,
    description,
    content
  }

  ActivityProxy.create(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Model = function (req, res, next) {
  const _id = req.params._id
  ActivityProxy.API_GetById(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Edit = function (req, res, next) {
  const _id = req.params._id
  const title = req.body.title
  const isVisible = req.body.isVisible
  const endTime = new Date(req.body.endTime)
  const startTime = new Date(req.body.startTime)
  const pic = req.body.pic
  const description = req.body.description
  const content = req.body.content

  const params = {
    _id,
    title,
    isVisible,
    endTime,
    startTime,
    pic,
    description,
    content
  }

  ActivityProxy.update(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Delete = function (req, res, next) {
  const _id = req.params._id
  ActivityProxy.remove(_id).then(function (model) {
    res.status(200).json(model)
  })
}
