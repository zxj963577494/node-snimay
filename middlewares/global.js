const WebSite = require('../proxy').WebSite
const Category = require('../proxy').Category

exports.init = function (req, res, next) { 
  // get WebSite
  const WebSitePromise = WebSite.getOne()

  // get Category
  const CategoryPromise = Category.get('title alias', { isVisible: 1 })

  Promise.all([WebSitePromise, CategoryPromise]).then(function ([website, category]) {
    res.locals.website = website
    res.locals.category = category
    next()
  }).catch(function (err) {
    return next(err)
  })
}
