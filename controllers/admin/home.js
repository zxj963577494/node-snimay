const eventproxy = require('eventproxy')
const Consult = require('../../proxy').Consult
const Product = require('../../proxy').Product

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

  Consult.getConsultsLimit(10, ep.done('consultlist'))
  Product.getProductsLimit({ cid: 1 }, 10, ep.done('productlist'))
  Product.getProductsLimit({ cid: 2 }, 10, ep.done('modelist'))
  Product.getProductsLimit({ cid: 3 }, 10, ep.done('matchlist'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

