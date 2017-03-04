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

exports.getBy_Id = function (_id) {
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
  }).catch(function (err) {
    Promise.reject(err)
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
