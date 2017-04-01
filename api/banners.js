const BannerProxy = require('../proxy').Banner

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
  BannerProxy.API_GetByPage('', {}, query).then(function (list) {
    res.status(200).json(list)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Add = function (req, res, next) {
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
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Model = function (req, res, next) {
  const _id = req.params._id
  BannerProxy.API_GetById(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Edit = function (req, res, next) {
  const _id = req.params._id
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

  BannerProxy.update(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Delete = function (req, res, next) {
  const _id = req.params._id
  BannerProxy.remove(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

