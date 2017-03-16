const WebSiteProxy = require('../proxy').WebSite


exports.List = function (req, res, next) {
  WebSiteProxy.get().then(function (list) {
    res.status(200).json(list)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Add = function (req, res, next) {
  const host = req.body.host
  const title = req.body.title
  const keywords = req.body.keywords
  const description = req.body.description
  const copyright = req.body.copyright
  const address = req.body.address
  const icp = req.body.icp
  const tel = req.body.tel
  const qq = req.body.qq
  const weibo = req.body.weibo
  const email = req.body.email
  const params = {
    host,
    title,
    keywords,
    description,
    copyright,
    address,
    icp,
    tel,
    qq,
    weibo,
    email
  }
  WebSiteProxy.create(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Model = function (req, res, next) {
  WebSiteProxy.getOne().then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Edit = function (req, res, next) {
  const _id = req.params._id
  const host = req.body.host
  const title = req.body.title
  const keywords = req.body.keywords
  const description = req.body.description
  const copyright = req.body.copyright
  const address = req.body.address
  const icp = req.body.icp
  const tel = req.body.tel
  const qq = req.body.qq
  const weibo = req.body.weibo
  const email = req.body.email

  const params = {
    _id,
    host,
    title,
    keywords,
    description,
    copyright,
    address,
    icp,
    tel,
    qq,
    weibo,
    email
  }

  WebSiteProxy.update(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Delete = function (req, res, next) {
  const _id = req.params._id
  WebSiteProxy.remove(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}
