const models = require('../models')
const WebSiteModel = models.WebSite

exports.getOne = function (callback) {
  WebSiteModel.findOne({}, callback)
}

exports.update = function (params, callback) {
  WebSiteModel.findOne({ _id: params._id }, function (err, website) {
    if (err || !website) {
      return callback(err)
    }
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
    website.save(callback)
  })
}

exports.create = function (params, callback) {
  const website = new WebSiteModel()
  website.host = params.host
  website.title = params.title
  website.description = params.description
  website.keywords = params.keywords
  website.copyright = params.copyright
  website.address = params.address
  website.icp = params.icp
  website.qq = params.qq
  website.weibo = params.weibo
  website.tel = params.tel
  website.mail = params.mail

  website.save(callback)
}
