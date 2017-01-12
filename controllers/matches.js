const eventproxy = require('eventproxy')
const _ = require('lodash')
const Product = require('../proxy').Product
const Selector = require('../proxy').Selector
const util = require('../util')

exports.get = function (req, res, next) {
    // 获取当前页
  var currentPage = parseInt(req.query.page, 10) || 1
  currentPage = currentPage > 0 ? currentPage : 1

    // 构建产品查询条件
  const options = Object.assign({
    cid: 3,
    isVisible: 1
  })

  const pageSize = 12

  const ep = new eventproxy()

  ep.all('products', 'keys', 'totalCount', 'pageLink', function (products, keys, totalCount, pageLink) {
    res.render('matches', {
      products: products,
      keys: keys,
      pageLink: pageLink,
      currentPage: currentPage,
      totalPages: Math.ceil(totalCount / pageSize),
      pageSize: pageSize
    })
  })

  Selector.getByCid(3, {
    isVisible: 1
  }, ep.done(function (keys) {
    let params = []
    let search = []
    keys.forEach((x) => {
      params.push({
        [x.alias]: req.query[x.alias] ? req.query[x.alias] : 'all'
      })
      search.push(req.query[x.alias] ? req.query[x.alias] : 'all')
    })
    let where = _.uniq(search).filter((x) => {
      return x !== 'all'
    })
    if (where.length > 0) {
      Object.assign(options, {
        'where': { $in: where }
      })
    }
    const pageLink = util.pageLink(params)
    util.addActive(keys, params)
    util.addLink('/matches', keys, params)
    ep.emit('pageLink', pageLink)
    ep.emit('keys', keys)

    Product.getProductsByPage('id skPic price title', currentPage, pageSize, options, ep.done('products'))

    Product.getProductCount(options, ep.done('totalCount'))
  }))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
