const ConsultProxy = require('../../proxy').Consult
const ProductProxy = require('../../proxy').Product


exports.get = function (req, res, next) {
  const ConsultPromise = ConsultProxy.getLimit(10)
  const ProductPromise = ProductProxy.getProductsLimit({ cid: 1 }, 10)
  const ModelPromise = ProductProxy.getProductsLimit({ cid: 2 }, 10)
  const MatchPromise = ProductProxy.getProductsLimit({ cid: 3 }, 10)

  Promise.all([ConsultPromise, ProductPromise, ModelPromise, MatchPromise]).then(function ([consultlist, productlist, modelist, matchlist]) {
    res.render('admin/home', {
      productlist: productlist,
      modelist: modelist,
      matchlist: matchlist,
      consultlist: consultlist,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

