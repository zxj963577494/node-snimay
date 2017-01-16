const eventproxy = require('eventproxy')
const UserProxy = require('../../proxy').User
const tools = require('../../util/tools')
const CategoryModel = require('../../models').Category
const SelectorModel = require('../../models').Selector
const defaultDB = require('../../config/db')

exports.get = function (req, res, next) {
  res.render('admin/install', {
    layout: null
  })
}

exports.post = function (req, res, next) {
  const name = req.body.name
  const password = req.body.password
  const email = req.body.email
  const isEnable = 1

  const params = {
    name,
    password,
    email,
    isEnable
  }

  const ep = new eventproxy()
  ep.all('model', 'categoryDB', 'selectorDB', function (model, categoryDB, selectorDB, IdentityCounterDB) {
    req.flash('info', {
      message: ''
    })
    res.redirect('/admin/siteconfig')
  })

  tools.bhash(password, ep.done(function (passhash) {
    UserProxy.create(params, ep.done('model'))
  }))

  CategoryModel.collection.insertMany(defaultDB.categories, ep.done('categoryDB'))

  SelectorModel.collection.insertMany(defaultDB.selectors, ep.done('selectorDB'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
