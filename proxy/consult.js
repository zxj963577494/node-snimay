const models = require('../models')
const ConsultModel = models.Consult

exports.get = function (select, options) {
  return ConsultModel.find(options, select, { sort: ['-createTime'] }).exec()
}

exports.getLimit = function (limit) {
  return ConsultModel.find({}, '_id name tel isRead remark', { sort: ['-createTime'] }).limit(limit).exec()
}

exports.getNotReadCount = function () {
  return ConsultModel.count({ isRead: 0 }).exec()
}

exports.getById = function (_id) {
  return ConsultModel.findOne({
    _id: _id
  }).exec()
}

exports.API_GetByPage = function (select, options, query) {
  let numToSkip = (query.pageIndex - 1) * query.pageSize
  return ConsultModel.find(Object.assign({}, options), select).sort(query.sort).skip(numToSkip).limit(query.pageSize).exec()
}

exports.API_GetById = function (_id) {
  return ConsultModel.findOne({
    _id: _id
  }).exec()
}

exports.update = function (params) {
  return ConsultModel.findOne({ _id: params._id }).then(function (consult) {
    consult.name = params.name
    consult.tel = params.tel
    consult.isRead = params.isRead
    consult.remark = params.remark
    consult.lastModifyTime = new Date()
    return consult.save()
  })
}

exports.create = function (params) {
  const consult = new ConsultModel()
  consult.name = params.name
  consult.tel = params.tel
  consult.isRead = params.isRead
  consult.remark = params.remark
  return consult.save()
}

exports.remove = function (_id) {
  return ConsultModel.remove({
    _id: _id
  })
}
