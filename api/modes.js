const ProductProxy = require('../proxy').Product
const _ = require('lodash')

exports.List = function (req, res, next) {
  let sortby = req.query.sortby || 'createTime'
  let order = req.query.order === 'asc' ? 1 : req.query.order === 'desc' ? -1 : -1
  let pageIndex = parseInt(req.query.pageindex, 10) || 1
  let pageSize = parseInt(req.query.pagesize, 10) || 12

  // 构建产品查询条件
  const options = Object.assign({
    cid: 2
  })

  let query = {
    sort: {
      [sortby]: order
    },
    pageIndex: pageIndex,
    pageSize: pageSize
  }

  ProductProxy.API_GetByPage('', options, query).then(function (products) {
    res.status(200).json(products)
  })
}

exports.Model = function (req, res, next) {
  const _id = req.params._id

  ProductProxy.API_GetById(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Add = function (req, res, next) {
  const categories = req.body.categories
  const categoryRef = categories.split(',')[0]
  const cid = categories.split(',')[1]
  const title = req.body.title
  const isIndex = req.body.isIndex
  const isVisible = req.body.isVisible
  const code = req.body.code
  const part = req.body.part
  const skPic = req.body.skPic
  const sliderPics = req.body.sliderPics.split(',')
  const content = req.body.content
  const search = _.uniq(req.body.search ? req.body.search.split(',') : '')
  const where = _.uniq(req.body.where ? req.body.where.concat(['all']) : new Array().concat(['all']))
  const tag = _.uniq(req.body.tag ? req.body.tag.split(',') : '')
  const description = req.body.description
  const price = req.body.price
  const params = {
    cid, categoryRef, title, content, price, description, sliderPics, skPic, code, part, isVisible, isIndex, tag, where, search
  }
  ProductProxy.create(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Edit = function (req, res, next) {
  const _id = req.params._id
  const categories = req.body.categories
  const categoryRef = categories.split(',')[0]
  const cid = categories.split(',')[1]
  const title = req.body.title
  const isIndex = req.body.isIndex
  const isVisible = req.body.isVisible
  const code = req.body.code
  const part = req.body.part
  const skPic = req.body.skPic
  const sliderPics = req.body.sliderPics.split(',')
  const content = req.body.content
  const search = _.uniq(req.body.search ? req.body.search.split(',') : '')
  const where = _.uniq(req.body.where ? req.body.where.concat(['all']) : new Array().concat(['all']))
  const tag = _.uniq(req.body.tag ? req.body.tag.split(',') : '')
  const description = req.body.description
  const price = req.body.price
  const params = {
    _id, cid, categoryRef, title, content, price, description, sliderPics, skPic, code, part, isVisible, isIndex, tag, where, search
  }
  ProductProxy.update(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}

exports.Delete = function (req, res, next) {
  const _id = req.params._id
  ProductProxy.remove(_id).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}
