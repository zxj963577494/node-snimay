const models = require('../models')
const ActivityModel = models.Activity

exports.get = function (select, options, callback) {
  ActivityModel.find(options, select, {
    sort: ['-lastModifyTime']
  }, callback)
}

exports.getByPage = function (select, pageIndex, pageSize, options, callback) {
  let numToSkip = (pageIndex - 1) * pageSize
  ActivityModel.find(options, select).sort({
    'createTime': -1
  }).skip(numToSkip).limit(pageSize).exec(callback)
}

exports.getCount = function (options, callback) {
  ActivityModel.count(options, callback)
}

exports.getById = function (id, callback) {
  ActivityModel.findOne({
    id: id
  }, callback)
}

exports.getBy_Id = function (_id, callback) {
  ActivityModel.findOne({
    _id: _id
  }, callback)
}

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

exports.create = function (params, callback) {
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
