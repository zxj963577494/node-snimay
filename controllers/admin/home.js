const eventproxy = require('eventproxy')
const ConsultProxy = require('../../proxy').Consult
const ProductProxy = require('../../proxy').Product


exports.get = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('productlist', 'modelist', 'matchlist', 'consultlist', function (productlist, modelist, matchlist, consultlist) {
    res.render('admin/home', {
      productlist: productlist,
      modelist: modelist,
      matchlist: matchlist,
      consultlist: consultlist,
      layout: 'admin'
    })
  })

  ConsultProxy.getConsultsLimit(10, ep.done('consultlist'))
  ProductProxy.getProductsLimit({ cid: 1 }, 10, ep.done('productlist'))
  ProductProxy.getProductsLimit({ cid: 2 }, 10, ep.done('modelist'))
  ProductProxy.getProductsLimit({ cid: 3 }, 10, ep.done('matchlist'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

