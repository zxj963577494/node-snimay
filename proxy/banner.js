const models = require('../models')
const BannerModel = models.Banner


exports.get = function (options, callback) {
  BannerModel.find(Object.assign({ startTime: { '$lte': new Date() }, endTime: { $gt: new Date() } }, options), {}, { sort: ['-sort'] }, callback)
}

exports.get_Admin = function (callback) {
  BannerModel.find({}, '_id title startTime endTime sort isVisible', { sort: ['-lastModifyTime'] }, callback)
}

exports.getBy_Id = function (_id, callback) {
  BannerModel.findOne({
    _id: _id
  }, callback)
}

exports.update = function (params, callback) {
  BannerModel.findOne({
    _id: params._id
  }, function (err, banner) {
    if (err || !banner) {
      return callback(err)
    }
    banner.title = params.title
    banner.price = params.price
    banner.description = params.description
    banner.link = params.link
    banner.pic = params.pic
    banner.startTime = params.startTime
    banner.endTime = params.endTime
    banner.isVisible = params.isVisible
    banner.sort = params.sort
    banner.lastModifyTime = new Date()
    banner.save(callback)
  })
}


exports.create = function (params, callback) {
  var banner = new BannerModel()
  banner.title = params.title
  banner.price = params.price
  banner.description = params.description
  banner.link = params.link
  banner.pic = params.pic
  banner.startTime = params.startTime
  banner.endTime = params.endTime
  banner.isVisible = params.isVisible
  banner.sort = params.sort

  banner.save(callback)
}

exports.remove = function (_id, callback) {
  BannerModel.remove({
    _id: _id
  }, callback)
}
