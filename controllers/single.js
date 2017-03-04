const ProductProxy = require('../proxy').Product

exports.get = function (req, res, next) {
  const id = req.params.id

  ProductProxy.getProductById(id).then(function (product) {
    res.render('single', {
      product: product
    })
  }).catch(function (err) {
    return next(err)
  })
}
