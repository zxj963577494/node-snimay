const path = require('path')
const UserProxy = require('../../proxy').User
const tools = require('../../util/tools')
const CategoryModel = require('../../models').Category
const SelectorModel = require('../../models').Selector
const BannerModel = require('../../models').Banner
const ProductModel = require('../../models').Product
const ActivityModel = require('../../models').Activity
const WebSiteProxy = require('../../proxy').WebSite
const defaultDB = require('../../config/db')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

exports.get = function (req, res, next) {
  fs.statAsync(path.join(__dirname, '../../install.lock')).then(function (stat) {
    if (stat.isFile()) {
      return res.redirect('/signin')
    } else {
      return next()
    }
  }).catch(function (err) {
    if (err && err.code === 'ENOENT') {
      return res.render('admin/install', {
        notnext: true,
        layout: null
      })
    } else if (err) {
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

  tools.bhash(password).then(function (passhash) {
    params.password = passhash
    const UserPromise = UserProxy.create(params)
    const CategoryPromise = CategoryModel.collection.insertMany(defaultDB.categories)
    const SelectorPromise = SelectorModel.collection.insertMany(defaultDB.selectors)
    const ActivityPromise = ActivityModel.collection.insertMany(defaultDB.activities)
    const BannerPromise = BannerModel.collection.insertMany(defaultDB.banners)
    const ProductPromise = ProductModel.collection.insertMany(defaultDB.products)
    Promise.all([UserPromise, CategoryPromise, SelectorPromise, ActivityPromise, BannerPromise, ProductPromise]).then(function ([user, categoryDB, selectorDB, bannerDB, productDB, activityDB]) {
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
  }).catch(function (err) {
    return next(err)
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
  WebSiteProxy.create(params).then(function () {
    req.flash('info', {
      message: '安装成功'
    })
    res.redirect('/signin')
  })
}
