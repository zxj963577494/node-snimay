const uuid = require('node-uuid')
const models = require('../models')
const UserModel = models.User

exports.getOne = function (options, callback) {
  UserModel.findOne(options, '_id name email isEnable createTime', { sort: '-createTime' }, callback)
}

exports.get = function (callback) {
  UserModel.find({}, '_id name email isEnable createTime', { sort: '-createTime' }, callback)
}

exports.getBy_Id = function (_id, callback) {
  UserModel.findOne({
    _id: _id
  }, callback)
}

exports.getByUserId = function (userid, callback) {
  UserModel.findOne({
    userid: userid
  }, 'name', callback)
}

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


exports.create = function (params, callback) {
  const user = new UserModel()
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
