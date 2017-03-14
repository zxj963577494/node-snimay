const CategoryProxy = require('../proxy').Category

exports.List = function (req, res, next) { 
  CategoryProxy.API_Get('', {}).then(function (category) {
    res.status(200).json(category)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Model = function (req, res, next) {
  const _id = req.params._id
  CategoryProxy.API_GetById(_id).then(function (model) {
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
  const params = {
    _id, title, sort, isVisible
  }
  CategoryProxy.update(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Add = function (req, res, next) {
  const title = req.body.title
  const sort = req.body.sort
  const alias = req.body.alias
  const isVisible = req.body.isVisible
  const params = {
    title, alias, sort, isVisible
  }

  CategoryProxy.create(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Delete = function (req, res, next) {
  const _id = req.params._id
  CategoryProxy.remove(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}
