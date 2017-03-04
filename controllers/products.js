const _ = require('lodash')
const ProductProxy = require('../proxy').Product
const SelectorProxy = require('../proxy').Selector
const whereUtil = require('../util/whereUtil')

exports.get = function (req, res, next) {
  // 获取当前页
  let currentPage = parseInt(req.query.page, 10) || 1
  currentPage = currentPage > 0 ? currentPage : 1

  // 构建产品查询条件
  const options = Object.assign({
    cid: 1,
    isVisible: 1
  })

  const pageSize = 12

  SelectorProxy.getByCid(1, {
    isVisible: 1
  }).then(function (keys) {
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
    const pageLink = whereUtil.pageLink(params)
    whereUtil.addActive(keys, params)
    whereUtil.addLink('/products', keys, params)

    const ProductsByPagePromise = ProductProxy.getProductsByPage('id skPic price title', currentPage, pageSize, options)

    const ProductCountPromise = ProductProxy.getProductCount(options)
    
    Promise.all([ProductsByPagePromise, ProductCountPromise]).then(function ([products, totalCount]) {
      res.render('products', {
        products: products,
        keys: keys,
        pageLink: pageLink,
        currentPage: currentPage,
        totalPages: Math.ceil(totalCount / pageSize),
        pageSize: pageSize
      })
    })
  })
}
