const eventproxy = require('eventproxy')
const WebSite = require('../proxy').WebSite
const Category = require('../proxy').Category

exports.init = function (req, res, next) {
  const ep = new eventproxy()
  ep.all('website', 'category', function (website, category) {
    res.locals.website = website
    res.locals.category = category
    next()
  })

    // get WebSite
  WebSite.getOne(ep.done('website'))

    // get Category
  Category.get('title alias', {isVisible: 1}, ep.done('category'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
