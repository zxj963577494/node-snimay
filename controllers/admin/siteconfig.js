const eventproxy = require('eventproxy')
const WebSiteProxy = require('../../proxy').WebSite

exports.get = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('website', function (website) {
    res.render('admin/siteconfig', {
      website: website,
      layout: 'admin'
    })
  })

  WebSiteProxy.getOne(ep.done('website'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.update = function (req, res, next) {
  const _id = req.body._id
  const host = req.body.host
  const title = req.body.title
  const keywords = req.body.keywords
  const description = req.body.description
  const copyright = req.body.copyright
  const address = req.body.address
  const icp = req.body.icp
  const tel = req.body.tel
  const qq = req.body.qq
  const weibo = req.body.weibo
  const email = req.body.email

  const params = {
    _id,
    host,
    title,
    keywords,
    description,
    copyright,
    address,
    icp,
    tel,
    qq,
    weibo,
    email
  }

  const ep = new eventproxy()
  ep.all('website', function (website) {
    req.flash('info', { message: '编辑成功' })
    res.redirect('/admin/siteconfig')
  })

  WebSiteProxy.update(params, ep.done('website'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
