const uuid = require('node-uuid');
const models = require('../models');
const User = models.User;

/**
 * 获取用户
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.get = function (opts, callback) {
    User.findOne(opts, callback);
};

exports.getUsers = function (callback) {
    User.find({}, '_id name email isEnable createTime', { sort: '-createTime' }, callback);
};

/**
 * 根据Id获取Banner
 */
exports.getById = function (_id, callback) {
    User.findOne({
        _id: _id
    }, callback);
}

exports.getByUserId = function (userid, callback) {
    User.findOne({
        userid: userid
    }, 'name', callback);
}

/**
 * 更新
 * @param {Function} callback 回调函数
 */
exports.update = function (_id, name, email, isEnable, password, callback) {
    User.findOne({ _id: _id }, function (err, user) {
        if (err || !user) {
            return callback(err);
        }
        user.name = name;
        user.email = email;
        user.isEnable = isEnable;
        if (password) {
            user.password = password;
        };
        user.lastModifyTime = new Date();
        user.save(callback);
    });
};

/**
 * 新增
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (name, email, isEnable, password, callback) {
    let user = new User();
    user.userid = uuid.v4();
    user.name = name;
    user.email = email;
    user.isEnable = isEnable;
    user.password = password;

    user.save(callback);
};


exports.remove = function (_id, callback) {
    User.remove({
        _id: _id
    }, callback)
}