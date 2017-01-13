const models = require('../models')
const WebSiteModel = models.WebSite

/**
 * 获取网站配置信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.get = function (callback) {
  WebSiteModel.findOne({}, callback)
}

/**
 * 更新网站配置信息
 * @param {Function} callback 回调函数
 */
exports.update = function (_id, host, title, keywords, description, copyright, address, icp, tel, qq, weibo, mail, callback) {
  WebSiteModel.findOne({ _id: _id }, function (err, website) {
    if (err || !website) {
      return callback(err)
    }
    website.host = host
    website.title = title
    website.keywords = keywords
    website.description = description
    website.title = title
    website.copyright = copyright
    website.address = address
    website.icp = icp
    website.tel = tel
    website.qq = qq
    website.weibo = weibo
    website.mail = mail
    website.lastModifyTime = new Date()
    website.save(callback)
  })
}

/**
 * 新增网站配置信息
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (host, title, keywords, description, copyright, address, icp, tel, qq, weibo, mail, callback) {
  var website = new WebSiteModel()
  website.host = host
  website.title = title
  website.description = description
  website.keywords = keywords
  website.copyright = copyright
  website.address = address
  website.icp = icp
  website.qq = qq
  website.weibo = weibo
  website.tel = tel
  website.mail = mail

  website.save(callback)
}
