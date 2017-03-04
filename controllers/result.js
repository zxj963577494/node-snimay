const ProductProxy = require('../proxy').Product
const nodejieba = require('nodejieba')

exports.get = function (req, res, next) {
  // 获取当前页
  let currentPage = parseInt(req.query.page, 10) || 1
  currentPage = currentPage > 0 ? currentPage : 1

  let strWhere = req.query.search

  let strTag = req.query.tag

  // 构建产品查询条件
  const options = Object.assign({
    isVisible: 1
  })

  // 分词
  let search = strWhere ? nodejieba.cut(strWhere, true) : ''

  if (search) {
    Object.assign(options, {
      'search': { $in: search }
    })
  }

  if (strTag) {
    Object.assign(options, {
      'tag': { $in: new Array(strTag) }
    })
  }

  const pageSize = 12

  const ProductsByPagePromise = ProductProxy.getProductsByPage('id skPic price title', currentPage, pageSize, options)

  const ProductCountPromise = ProductProxy.getProductCount(options)

  Promise.all([ProductsByPagePromise, ProductCountPromise]).then(function ([products, totalCount]) {
    res.render('result', {
      products: products,
      currentPage: currentPage,
      totalPages: Math.ceil(totalCount / pageSize),
      pageSize: pageSize
    })
  })
}
