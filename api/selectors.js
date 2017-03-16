const mongoose = require('mongoose')
const SelectorProxy = require('../proxy').Selector

exports.HeadAdd = function (req, res, next) {
  const cid = req.params.cid
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const values = new Array({
    _id: mongoose.Types.ObjectId(),
    sort: 99,
    isVisible: 1,
    title: '全部',
    alias: 'all'
  })
  const params = {
    title, alias, cid, isVisible, sort, values
  }

  SelectorProxy.create(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.HeadModel = function (req, res, next) {
  const _id = req.params._id
  SelectorProxy.API_GetHeadById(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.HeadEdit = function (req, res, next) {
  const _id = req.params._id
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const params = {
    _id, title, alias, sort, isVisible
  }
  SelectorProxy.update(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.HeadList = function (req, res, next) {
  let cid = req.params.cid || 1
  SelectorProxy.API_GetHeadByCid(cid, {}).then(function (list) {
    res.status(200).json(list)
  }).catch(function (err) {
    return next(err)
  })
}

exports.HeadDelete = function (req, res, next) {
  const _id = req.params._id
  SelectorProxy.removeKey(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.BodyAdd = function (req, res, next) {
  const _id = req.params._id
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const value = {
    _id: mongoose.Types.ObjectId(),
    sort: sort,
    isVisible: isVisible,
    title: title,
    alias: alias
  }
  SelectorProxy.updateValues(_id, value).then(function (model) {
    res.status(200).json(value)
  }).catch(function (err) {
    return next(err)
  })
}

exports.BodyModel = function (req, res, next) {
  const _id = req.params._id
  const _sid = req.params._sid

  SelectorProxy.API_GetHeadById(_id).then(function (model) {
    let m = model.values.filter((x) => {
      return x._id.toString() === _sid
    })
    res.status(200).json(m)
  }).catch(function (err) {
    return next(err)
  })
}

exports.BodyEdit = function (req, res, next) {
  const _id = req.params._id
  const _sid = req.params.sid
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const params = {
    _id, _sid, title, alias, sort, isVisible
  }
  SelectorProxy.updateValueModel(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.BodyList = function (req, res, next) {
  const _id = req.params._id
  SelectorProxy.API_GetHeadById(_id).then(function (model) {
    res.status(200).json(model.values)
  }).catch(function (err) {
    return next(err)
  })
}

exports.BodyDelete = function (req, res, next) {
  const _id = req.params._id
  const _sid = req.params._sid
  SelectorProxy.removeValue(_id, _sid).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}
