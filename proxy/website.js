const models = require('../models')
const WebSiteModel = models.WebSite

exports.getOne = function () {
  return WebSiteModel.findOne({}).exec()
}

exports.update = function (params) {
  return WebSiteModel.findOne({ _id: params._id }).then(function (website) {
    website.host = params.host
    website.title = params.title
    website.keywords = params.keywords
    website.description = params.description
    website.title = params.title
    website.copyright = params.copyright
    website.address = params.address
    website.icp = params.icp
    website.tel = params.tel
    website.qq = params.qq
    website.weibo = params.weibo
    website.email = params.email
    website.lastModifyTime = new Date()
    return website.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}

exports.create = function (params) {
  const website = new WebSiteModel()
  website.host = params.host
  website.title = params.title
  website.email = params.email

  return website.save()
}
