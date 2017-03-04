const models = require('../models')
const BannerModel = models.Banner


exports.get = function (options) {
  return BannerModel.find(Object.assign({ startTime: { '$lte': new Date() }, endTime: { $gt: new Date() } }, options), {}, { sort: ['-sort'] }).exec()
}

exports.get_Admin = function () {
  return BannerModel.find({}, '_id title startTime endTime sort isVisible', { sort: ['-lastModifyTime'] }).exec()
}

exports.getBy_Id = function (_id) {
  return BannerModel.findOne({
    _id: _id
  }).exec()
}

exports.update = function (params) {
  return BannerModel.findOne({
    _id: params._id
  }).then(function (banner) {
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
    return banner.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}


exports.create = function (params) {
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

  return banner.save()
}

exports.remove = function (_id, callback) {
  return BannerModel.remove({
    _id: _id
  }).exec()
}
