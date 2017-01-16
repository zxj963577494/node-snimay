const models = require('../models')
const ConsultModel = models.Consult

exports.get = function (select, options, callback) {
  ConsultModel.find(options, select, { sort: ['-createTime'] }, callback)
}

exports.getLimit = function (limit, callback) {
  ConsultModel.find({}, '_id name tel isRead remark', { sort: ['-createTime'] }).limit(limit).exec(callback)
}

exports.getNotReadCount = function (callback) {
  ConsultModel.count({ isRead: 0 }, callback)
}

exports.getBy_Id = function (_id, callback) {
  ConsultModel.findOne({
    _id: _id
  }, callback)
}

exports.update = function (params, callback) {
  ConsultModel.findOne({ _id: params._id }, function (err, consult) {
    if (err || !consult) {
      return callback(err)
    }
    consult.name = params.name
    consult.tel = params.tel
    consult.isRead = params.isRead
    consult.remark = params.remark
    consult.lastModifyTime = new Date()
    consult.save(callback)
  })
}

exports.create = function (name, tel, isRead, remark, callback) {
  var consult = new ConsultModel()
  consult.name = name
  consult.tel = tel
  consult.isRead = isRead
  consult.remark = remark

  consult.save(callback)
}

exports.remove = function (_id, callback) {
  ConsultModel.remove({
    _id: _id
  }, callback)
}
