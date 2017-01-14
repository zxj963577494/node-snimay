const mongoose = require('mongoose')
const config = require('config-lite')
const autoIncrement = require('mongoose-auto-increment')

const connection = mongoose.connect(config.mongodb, {
  server: {
    poolSize: 20
  }
}, function (err) {
  if (err) {
    process.exit(1)
  }
})

autoIncrement.initialize(connection)

// models
require('./website')
require('./product')
require('./category')
require('./banner')
require('./selector')
require('./consult')
require('./user')
require('./activity')

exports.WebSite = mongoose.model('WebSite')
exports.Banner = mongoose.model('Banner')
exports.Product = mongoose.model('Product')
exports.Category = mongoose.model('Category')
exports.Selector = mongoose.model('Selector')
exports.Consult = mongoose.model('Consult')
exports.User = mongoose.model('User')
exports.Activity = mongoose.model('Activity')
