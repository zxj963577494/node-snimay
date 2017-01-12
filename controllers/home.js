const eventproxy = require('eventproxy')
const Product = require('../proxy').Product
const Banner = require('../proxy').Banner
const Consult = require('../proxy').Consult

exports.get = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('products', 'banners', function (products, banners) {
    res.render('home', {
      products: products.filter((x) => x.categoryRef.id === 1),
      mode: products.filter((x) => x.categoryRef.id === 2),
      match: products.filter((x) => x.categoryRef.id === 3),
      banners: banners
    })
  })

  Product.getProductsWithCategory('id categoryRef skPic description price title', { isVisible: 1, isIndex: 1 }, { isVisible: 1 }, ep.done('products'))

  Banner.getBanners({ isVisible: 1 }, ep.done('banners'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.postConsulrAdd = function (req, res, next) {
  const name = req.body.name
  const tel = req.body.tel
  const isRead = 0
  const remark = ''

  const ep = new eventproxy()
  ep.all('model', function (model) {
    req.flash('info', { message: '提交成功，我们会主动和您联系！' })
    res.redirect('back')
  })

  Consult.newAndSave(name, tel, isRead, remark, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
