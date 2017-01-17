const path = require('path')
const fs = require('fs')
const eventproxy = require('eventproxy')
const UserProxy = require('../../proxy').User
const tools = require('../../util/tools')
const CategoryModel = require('../../models').Category
const SelectorModel = require('../../models').Selector
const BannerModel = require('../../models').Banner
const ProductModel = require('../../models').Product
const ActivityModel = require('../../models').Activity
const WebSiteProxy = require('../../proxy').WebSite
const defaultDB = require('../../config/db')

exports.get = function (req, res, next) {
  fs.stat(path.join(__dirname, '../../install.lock'), function (err, stat) {
    if (err && err.code === 'ENOENT') {
      return res.render('admin/install', {
        notnext: true,
        layout: null
      })
    } else if (err) {
      return next(err)
    }
    if (stat.isFile()) {
      return res.redirect('/signin')
    } else {
      return next(err)
    }
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

  ep.all('model', 'categoryDB', 'selectorDB', 'bannerDB', 'productDB', 'activityDB', function (model, categoryDB, selectorDB, bannerDB, productDB, activityDB) {
    fs.writeFile('install.lock', true, function (err) {
      if (err) {
        return next(err)
      }
      req.flash('info', {
        message: '下一步'
      })
      return res.render('admin/install', {
        notnext: false,
        layout: null
      })
    })
  })

  tools.bhash(password, ep.done(function (passhash) {
    params.password = passhash
    UserProxy.create(params, ep.done('model'))
  }))

  CategoryModel.collection.insertMany(defaultDB.categories, ep.done('categoryDB'))

  SelectorModel.collection.insertMany(defaultDB.selectors, ep.done('selectorDB'))

  ActivityModel.collection.insertMany(defaultDB.activities, ep.done('activityDB'))

  BannerModel.collection.insertMany(defaultDB.banners, ep.done('bannerDB'))

  ProductModel.collection.insertMany(defaultDB.products, ep.done('productDB'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.next = function (req, res, next) {
  const host = req.body.host
  const title = req.body.title
  const email = req.body.email

  const params = {
    host,
    title,
    email
  }

  const ep = new eventproxy()

  ep.all('model', function (model) {
    req.flash('info', {
      message: '安装成功'
    })
    res.redirect('/signin')
  })

  WebSiteProxy.create(params, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
