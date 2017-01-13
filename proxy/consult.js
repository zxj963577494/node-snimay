const models = require('../models')
const ConsultModel = models.Consult

/**
 * 获取用户咨询
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.get = function (callback) {
  ConsultModel.findOne({}, callback)
}

exports.getConsults = function (callback) {
  ConsultModel.find({}, '_id name tel isRead remark', { sort: '-createTime' }, callback)
}

exports.getConsultsLimit = function (limit, callback) {
  ConsultModel.find({}, '_id name tel isRead remark', { sort: '-createTime' }).limit(limit).exec(callback)
}

/**
 * 获取未回访的数量
 */
exports.getNotReadCount = function (callback) {
  ConsultModel.count({ isRead: 0 }, callback)
}

/**
 * 根据Id获取Banner
 */
exports.getById = function (_id, callback) {
  ConsultModel.findOne({
    _id: _id
  }, callback)
}

/**
 * 更新
 * @param {Function} callback 回调函数
 */
exports.update = function (_id, name, tel, isRead, remark, callback) {
  ConsultModel.findOne({ _id: _id }, function (err, consult) {
    if (err || !consult) {
      return callback(err)
    }
    consult.name = name
    consult.tel = tel
    consult.isRead = isRead
    consult.remark = remark
    consult.lastModifyTime = new Date()
    consult.save(callback)
  })
}

/**
 * 新增
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (name, tel, isRead, remark, callback) {
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
