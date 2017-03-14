const models = require('../models')
const ActivityModel = models.Activity

exports.get = function (select, options) {
  return ActivityModel.find(options, select, {
    sort: ['-createTime']
  }).exec()
}

exports.getByPage = function (select, pageIndex, pageSize, options) {
  let numToSkip = (pageIndex - 1) * pageSize
  return ActivityModel.find(options, select).sort({
    'createTime': -1
  }).skip(numToSkip).limit(pageSize).exec()
}

exports.getCount = function (options) {
  return ActivityModel.count(options).exec()
}

exports.getById = function (id) {
  return ActivityModel.findOne({
    id: id
  }).exec()
}

exports.getBy_Id = function (_id) {
  return ActivityModel.findOne({
    _id: _id
  }).exec()
}

exports.API_GetByPage = function (select, options, query) {
  let numToSkip = (query.pageIndex - 1) * query.pageSize
  return ActivityModel.find(Object.assign({}, options), select).sort(query.sort).skip(numToSkip).limit(query.pageSize).exec()
}

exports.API_GetById = function (_id) {
  return ActivityModel.findOne({
    _id: _id
  }).exec()
}

exports.update = function (params) {
  return ActivityModel.findOne({
    _id: params._id
  }).then(function (model) {
    model.title = params.title
    model.description = params.description
    model.content = params.content
    model.pic = params.pic
    model.startTime = params.startTime
    model.endTime = params.endTime
    model.isVisible = params.isVisible
    model.lastModifyTime = new Date()
    return model.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}

exports.create = function (params) {
  var model = new ActivityModel()
  model.title = params.title
  model.description = params.description
  model.content = params.content
  model.pic = params.pic
  model.startTime = params.startTime
  model.endTime = params.endTime
  model.isVisible = params.isVisible

  return model.save()
}

exports.remove = function (_id) {
  return ActivityModel.remove({
    _id: _id
  })
}
