const models = require('../models')
const BannerModel = models.Banner

/**
 * 获取Banner
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - count, 产品的数量
 * @param {Function} callback 获取消息数量
 */
exports.getBanners = function (options, callback) {
  BannerModel.find(Object.assign({ startTime: { '$lte': new Date() }, endTime: { $gt: new Date() } }, options), {}, { sort: ['-sort'] }, callback)
}

exports.getBanners_Admin = function (callback) {
  BannerModel.find({}, '_id title startTime endTime sort isVisible', { sort: ['-lastModifyTime'] }, callback)
}

/**
 * 根据Id获取Banner
 */
exports.getBannerById = function (_id, callback) {
  BannerModel.findOne({
    _id: _id
  }, callback)
}

/**
 * 新增、保存
 */
exports.update = function (bannerParams, callback) {
  BannerModel.findOne({
    _id: bannerParams._id
  }, function (err, banner) {
    if (err || !banner) {
      return callback(err)
    }
    banner.title = bannerParams.title
    banner.price = bannerParams.price
    banner.description = bannerParams.description
    banner.link = bannerParams.link
    banner.pic = bannerParams.pic
    banner.startTime = bannerParams.startTime
    banner.endTime = bannerParams.endTime
    banner.isVisible = bannerParams.isVisible
    banner.sort = bannerParams.sort
    banner.lastModifyTime = new Date()
    banner.save(callback)
  })
}

/**
 * 新增、保存
 */
exports.newAndSave = function (bannerParams, callback) {
  var banner = new BannerModel()
  banner.title = bannerParams.title
  banner.price = bannerParams.price
  banner.description = bannerParams.description
  banner.link = bannerParams.link
  banner.pic = bannerParams.pic
  banner.startTime = bannerParams.startTime
  banner.endTime = bannerParams.endTime
  banner.isVisible = bannerParams.isVisible
  banner.sort = bannerParams.sort

  banner.save(callback)
}

exports.remove = function (_id, callback) {
  BannerModel.remove({
    _id: _id
  }, callback)
}
