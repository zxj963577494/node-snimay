const _ = require('lodash')
const models = require('../models')
const Banner = models.Banner

/**
 * 获取Banner
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - count, 产品的数量
 * @param {Function} callback 获取消息数量
 */
exports.getBanners = function (options, callback) {
  Banner.find(Object.assign({ startTime: { '$lte': new Date() }, endTime: { $gt: new Date() } }, options), {}, { sort: '-sort' }, callback)
}

exports.getBanners_Admin = function (callback) {
  Banner.find({}, '_id title startTime endTime sort isVisible', { sort: '-sort' }, callback)
}

/**
 * 根据Id获取Banner
 */
exports.getBannerById = function (_id, callback) {
  Banner.findOne({
    _id: _id
  }, callback)
}

/**
 * 新增、保存
 */
exports.update = function (_id, title, sort, isVisible, endTime, startTime, pic, link, description, price, callback) {
  Banner.findOne({
    _id: _id
  }, function (err, banner) {
    if (err || !banner) {
      return callback(err)
    }
    banner.title = title
    banner.price = price
    banner.description = description
    banner.link = link
    banner.pic = pic
    banner.startTime = startTime
    banner.endTime = endTime
    banner.isVisible = isVisible
    banner.sort = sort
    banner.lastModifyTime = new Date()
    banner.save(callback)
  })
}

/**
 * 新增、保存
 */
exports.newAndSave = function (title, sort, isVisible, endTime, startTime, pic, link, description, price, callback) {
  var banner = new Banner()
  banner.title = title
  banner.price = price
  banner.description = description
  banner.link = link
  banner.pic = pic
  banner.startTime = startTime
  banner.endTime = endTime
  banner.isVisible = isVisible
  banner.sort = sort

  banner.save(callback)
}

exports.remove = function (_id, callback) {
  Banner.remove({
    _id: _id
  }, callback)
}
