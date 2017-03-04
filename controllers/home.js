const ProductProxy = require('../proxy').Product
const BannerProxy = require('../proxy').Banner
const ConsultProxy = require('../proxy').Consult

exports.get = function (req, res, next) {
  const ProductPromise = ProductProxy.getProductsWithCategory('id categoryRef skPic description price title', { isVisible: 1, isIndex: 1 }, { isVisible: 1 })

  const BannerPromise = BannerProxy.get({ isVisible: 1 })

  Promise.all([ProductPromise, BannerPromise]).then(function ([products, banners]) {
    res.render('home', {
      products: products.filter((x) => x.categoryRef.id === 1),
      mode: products.filter((x) => x.categoryRef.id === 2),
      match: products.filter((x) => x.categoryRef.id === 3),
      banners: banners
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.postConsulrAdd = function (req, res, next) {
  const name = req.body.name
  const tel = req.body.tel
  const isRead = 0
  const remark = ''

  const params = {
    name, tel, isRead, remark
  }

  ConsultProxy.create(params).then(function (model) {
    req.flash('info', { message: '提交成功，我们会主动和您联系！' })
    res.redirect('back')
  }).catch(function (err) {
    return next(err)
  })
}
