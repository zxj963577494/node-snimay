const ProductProxy = require('../proxy').Product
const BannerProxy = require('../proxy').Banner
const ConsultProxy = require('../proxy').Consult

exports.get = function (req, res, next) {
  const ProductPromise = ProductProxy.getProductsWithCategory('id categoryRef skPic description price title', { isVisible: 1, isIndex: 1 }, { isVisible: 1 })

  const BannerPromise = BannerProxy.get({ isVisible: 1 })

  Promise.all([ProductPromise, BannerPromise]).then(function ([products, banners]) {
    res.status(200).json({
      products: products.filter((x) => x.categoryRef.id === 1),
      mode: products.filter((x) => x.categoryRef.id === 2),
      match: products.filter((x) => x.categoryRef.id === 3),
      banners: banners
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.postConsultAdd = function (req, res, next) {
  const name = req.body.name
  const tel = req.body.tel
  const isRead = 0
  const remark = ''

  const params = {
    name, tel, isRead, remark
  }

  ConsultProxy.create(params).then(function (model) {
    res.status(200).json(model)
  }).catch(function (err) {
    return next(err)
  })
}
