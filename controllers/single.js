const eventproxy = require('eventproxy')
const ProductProxy = require('../proxy').Product

exports.get = function (req, res, next) {
  const id = req.params.id

  const ep = new eventproxy()

  ep.all('product', function (product) {
    res.render('single', {
      product: product
    })
  })

  ProductProxy.getProductById(id, ep.done('product'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
