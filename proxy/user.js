const models = require('../models')
const UserModel = models.User

exports.getOne = function (options) {
  return UserModel.findOne(options, 'userid _id name isEnable password token', { sort: ['-createTime'] }).exec()
}

exports.get = function (options) {
  return UserModel.find(options, '_id name email isEnable createTime', { sort: ['-createTime'] }).exec()
}

exports.getById = function (_id) {
  return UserModel.findOne({
    _id: _id
  }).exec()
}

exports.getByUserId = function (userid) {
  return UserModel.findOne({
    userid: userid
  }, 'name').exec()
}

exports.API_Get = function (select, options) {
  return UserModel.find(Object.assign({}, options), select).exec()
}

exports.API_GetById = function (_id) {
  return UserModel.findOne({
    _id: _id
  }).exec()
}

exports.update = function (params) {
  return UserModel.findOne({ _id: params._id }).then(function (user) {
    user.name = params.name
    user.email = params.email
    user.isEnable = params.isEnable
    if (params.password) {
      user.password = params.password
    };
    user.lastModifyTime = new Date()
    return user.save()
  })
}


exports.create = function (params) {
  const user = new UserModel()
  user.userid = params.userid
  user.name = params.name
  user.email = params.email
  user.isEnable = params.isEnable
  user.password = params.password
  user.token = params.token

  return user.save()
}

exports.remove = function (_id) {
  return UserModel.remove({
    _id: _id
  })
}
