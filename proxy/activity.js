const models = require('../models')
const ActivityModel = models.Activity

/**
 * 获取Banner
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - count, 产品的数量
 * @param {Function} callback 获取消息数量
 */
exports.getActivities = function (options, callback) {
  ActivityModel.find(Object.assign({
    startTime: {
      '$lte': new Date()
    },
    endTime: {
      $gt: new Date()
    }
  }, options), {}, {
    sort: ['-sort']
  }, callback)
}

exports.getActivities_Admin = function (callback) {
  ActivityModel.find({}, '_id title startTime endTime isVisible', {
    sort: ['-lastModifyTime']
  }, callback)
}

exports.getActivitiesByPage = function (select, pageIndex, pageSize, options, callback) {
  let numToSkip = (pageIndex - 1) * pageSize
  ActivityModel.find(options, select).sort({
    'createTime': -1
  }).skip(numToSkip).limit(pageSize).exec(callback)
}

exports.getActivityCount = function (options, callback) {
  ActivityModel.count(options, callback)
}

exports.getActivityById_Admin = function (_id, callback) {
  ActivityModel.findOne({
    _id: _id
  }, callback)
}

/**
 * 根据Id获取Banner
 */
exports.getActivityById = function (id, callback) {
  ActivityModel.findOne({
    id: id
  }, callback)
}

/**
 * 新增、保存
 */
exports.update = function (params, callback) {
  ActivityModel.findOne({
    _id: params._id
  }, function (err, model) {
    if (err || !model) {
      return callback(err)
    }
    model.title = params.title
    model.description = params.description
    model.content = params.content
    model.pic = params.pic
    model.startTime = params.startTime
    model.endTime = params.endTime
    model.isVisible = params.isVisible
    model.lastModifyTime = new Date()
    model.save(callback)
  })
}

/**
 * 新增、保存
 */
exports.newAndSave = function (params, callback) {
  var model = new ActivityModel()
  model.title = params.title
  model.description = params.description
  model.content = params.content
  model.pic = params.pic
  model.startTime = params.startTime
  model.endTime = params.endTime
  model.isVisible = params.isVisible

  model.save(callback)
}

exports.remove = function (_id, callback) {
  ActivityModel.remove({
    _id: _id
  }, callback)
}