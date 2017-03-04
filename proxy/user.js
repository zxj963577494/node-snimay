const uuid = require('node-uuid')
const models = require('../models')
const UserModel = models.User

exports.getOne = function (options) {
  return UserModel.findOne(options, 'userid _id name isEnable password', { sort: ['-createTime'] }).exec()
}

exports.get = function () {
  return UserModel.find({}, '_id name email isEnable createTime', { sort: ['-createTime'] }).exec()
}

exports.getBy_Id = function (_id) {
  return UserModel.findOne({
    _id: _id
  }).exec()
}

exports.getByUserId = function (userid) {
  return UserModel.findOne({
    userid: userid
  }, 'name').exec()
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
  }).catch(function (err) {
    Promise.reject(err)
  })
}


exports.create = function (params) {
  const user = new UserModel()
  user.userid = uuid.v4()
  user.name = params.name
  user.email = params.email
  user.isEnable = params.isEnable
  user.password = params.password

  return user.save()
}

exports.remove = function (_id) {
  return UserModel.remove({
    _id: _id
  })
}
