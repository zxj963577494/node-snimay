const uuid = require('node-uuid')
const models = require('../models')
const UserModel = models.User

/**
 * 获取用户
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.get = function (opts, callback) {
  UserModel.findOne(opts, callback)
}

exports.getUsers = function (callback) {
  UserModel.find({}, '_id name email isEnable createTime', { sort: '-createTime' }, callback)
}

/**
 * 根据Id获取Banner
 */
exports.getById = function (_id, callback) {
  UserModel.findOne({
    _id: _id
  }, callback)
}

exports.getByUserId = function (userid, callback) {
  UserModel.findOne({
    userid: userid
  }, 'name', callback)
}

/**
 * 更新
 * @param {Function} callback 回调函数
 */
exports.update = function (params, callback) {
  UserModel.findOne({ _id: params._id }, function (err, user) {
    if (err || !user) {
      return callback(err)
    }
    user.name = params.name
    user.email = params.email
    user.isEnable = params.isEnable
    if (params.password) {
      user.password = params.password
    };
    user.lastModifyTime = new Date()
    user.save(callback)
  })
}

/**
 * 新增
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (params, callback) {
  let user = new UserModel()
  user.userid = uuid.v4()
  user.name = params.name
  user.email = params.email
  user.isEnable = params.isEnable
  user.password = params.password

  user.save(callback)
}

exports.remove = function (_id, callback) {
  UserModel.remove({
    _id: _id
  }, callback)
}
