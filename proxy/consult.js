const models = require('../models');
const Consult = models.Consult;

/**
 * 获取用户咨询
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.get = function (callback) {
    Consult.findOne({}, callback);
};

exports.getConsults = function (callback) {
    Consult.find({}, '_id name tel isRead remark', { sort: '-createTime' }, callback);
};

/**
 * 获取未回访的数量
 */
exports.getNotReadCount = function (callback) {
    Consult.count({ isRead: 0 }, callback);
};

/**
 * 根据Id获取Banner
 */
exports.getById = function (_id, callback) {
    Consult.findOne({
        _id: _id
    }, callback);
}

/**
 * 更新
 * @param {Function} callback 回调函数
 */
exports.update = function (_id, name, tel, isRead, remark, callback) {
    Consult.findOne({ _id: _id }, function (err, consult) {
        if (err || !consult) {
            return callback(err);
        }
        consult.name = name;
        consult.tel = tel;
        consult.isRead = isRead;
        consult.remark = remark;
        consult.lastModifyTime = new Date();
        consult.save(callback);
    });
};

/**
 * 新增
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (name, tel, isRead, remark, callback) {
    var consult = new Consult();
    consult.name = name;
    consult.tel = tel;
    consult.isRead = isRead;
    consult.remark = remark;

    consult.save(callback);
};
exports.remove = function (_id, callback) {
    Consult.remove({
        _id: _id
    }, callback)
}